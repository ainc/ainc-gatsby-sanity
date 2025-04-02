// src/components/CorkBoard/CorkBoard.jsx
import React, { useEffect, useState } from "react";
import { client } from "../../utils/sanityClient";
import Pin from "../Pin/Pin";
import {
  BOARD_WIDTH,
  BOARD_HEIGHT,
  RESERVED_WIDTH,
  RESERVED_HEIGHT,
  getRandomPositionForPin,
} from "./randomPlacement";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const CorkBoard = ({
  userId = "demoUser123",
  initialPins = [],
  sanityBoardDoc = null,
  topLeftGatsbyImage = null,
}) => {
  const [pins, setPins] = useState([]); // store the full pin metadata
  const [positions, setPositions] = useState([]); // array of { id, x, y, ... }

  // 1) On load, prepare the board
  useEffect(() => {
    if (!initialPins.length) return;

    // If we have existing pinPositions from sanityBoardDoc, use them
    if (sanityBoardDoc && sanityBoardDoc.pinPositions?.length) {
      const pinnedPositions = sanityBoardDoc.pinPositions.map((pos) => {
        // find the matching pin doc
        const matchedPin = initialPins.find((p) => p._id === pos.pinId);
        return {
          id: pos.pinId,
          title: matchedPin?.title || "",
          type: matchedPin?.type || "",
          size: matchedPin?.size || 50,
          fallbackColor: matchedPin?.fallbackColor || "#ccc",
          pinImageUrl: matchedPin?.pinImage?.asset?.gatsbyImageData || null,
          x: pos.x,
          y: pos.y,
        };
      });
      setPins(initialPins);
      setPositions(pinnedPositions);
    } else {
      // No existing userBoard doc or no pinPositions => randomize
      const randomized = initialPins.map((pinDoc) => {
        const { x, y } = getRandomPositionForPin(
          pinDoc.type,
          pinDoc.size || 80,
        );
        return {
          id: pinDoc._id,
          title: pinDoc.title,
          type: pinDoc.type,
          size: pinDoc.size || 80,
          fallbackColor: pinDoc.fallbackColor,
          pinImageUrl: pinDoc.pinImage?.asset?.gatsbyImageData || null,
          x,
          y,
        };
      });
      setPins(initialPins);
      setPositions(randomized);

      // If we have a doc but no positions => patch it, or if no doc => create.
      if (sanityBoardDoc && sanityBoardDoc._id) {
        saveNewPositions(randomized, sanityBoardDoc._id);
      } else {
        createUserBoardDoc(randomized);
      }
    }
  }, [initialPins, sanityBoardDoc]);

  // 2) On any position update, save to Sanity
  useEffect(() => {
    if (!positions.length) return;
    // For real apps, we might throttle or debounce
    savePositionsToSanity(positions);
  }, [positions]);

  // 3) Drag & drop
  function handleDrop(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    if (!data) return;

    const { pinId, offsetX, offsetY } = JSON.parse(data);

    const boardRect = e.currentTarget.getBoundingClientRect();
    const dropX = e.clientX - boardRect.left - offsetX;
    const dropY = e.clientY - boardRect.top - offsetY;

    // Block if dropping in 200×200 reserved zone
    if (dropX < RESERVED_WIDTH && dropY < RESERVED_HEIGHT) {
      return;
    }

    // clamp to board edges
    const maxSize = 120; // a guess at largest pin
    const clampedX = Math.max(0, Math.min(dropX, BOARD_WIDTH - maxSize));
    const clampedY = Math.max(0, Math.min(dropY, BOARD_HEIGHT - maxSize));

    setPositions((prev) =>
      prev.map((p) =>
        p.id === pinId ? { ...p, x: clampedX, y: clampedY } : p,
      ),
    );
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  // 4) Create or patch userBoard doc in Sanity
  async function createUserBoardDoc(newPositions) {
    try {
      await client.create({
        _type: "userBoard",
        userId,
        pinPositions: newPositions.map((p) => ({
          pinId: p.id,
          x: p.x,
          y: p.y,
        })),
      });
    } catch (err) {
      console.error("Error creating userBoard doc:", err);
    }
  }

  async function saveNewPositions(newPositions, docId) {
    try {
      await client
        .patch(docId)
        .set({
          pinPositions: newPositions.map((p) => ({
            pinId: p.id,
            x: p.x,
            y: p.y,
          })),
        })
        .commit();
    } catch (err) {
      console.error("Error patching userBoard doc:", err);
    }
  }

  async function savePositionsToSanity(positionsToSave) {
    if (!positionsToSave.length) return;

    try {
      // fetch the userBoard doc again
      const userBoardDoc = await client.fetch(
        `*[_type == "userBoard" && userId == $uid][0]`,
        { uid: userId },
      );
      if (!userBoardDoc) {
        // create if missing
        await createUserBoardDoc(positionsToSave);
      } else {
        await saveNewPositions(positionsToSave, userBoardDoc._id);
      }
    } catch (err) {
      console.error("Error saving pin positions:", err);
    }
  }

  return (
    <div
      style={{
        width: BOARD_WIDTH,
        height: BOARD_HEIGHT,
        position: "relative",
        background: "#deb887",
        overflow: "hidden",
        margin: "auto", // centers horizontally if container is wide
        border: "2px solid #333",
      }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {/* Larger 200×200 reserved area with optional top-left image */}
      <div
        style={{
          position: "absolute",
          width: RESERVED_WIDTH,
          height: RESERVED_HEIGHT,
          backgroundColor: "#eee",
          overflow: "hidden",
        }}
      >
        {topLeftGatsbyImage && (
          <GatsbyImage
            image={topLeftGatsbyImage}
            alt="Board Top-Left"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
      </div>

      {/* Pins */}
      {positions.map((pin) => (
        <Pin key={pin.id} pin={pin} />
      ))}
    </div>
  );
};

export default CorkBoard;
