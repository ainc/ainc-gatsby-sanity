import React, { useEffect, useState } from "react";
import { client } from "../../utils/sanityClient";
import Pin from "./Pin";
import {
  BOARD_WIDTH,
  BOARD_HEIGHT,
  RESERVED_WIDTH,
  RESERVED_HEIGHT,
  getRandomPositionForPin,
} from "./randomPlacement";
import { GatsbyImage } from "gatsby-plugin-image";

const CorkBoard = ({
  userId = "demoUser123",
  initialPins = [],
  sanityBoardDoc = null,
  topLeftGatsbyImage = null,
}) => {
  const [pins, setPins] = useState([]); // All pin metadata
  const [positions, setPositions] = useState([]); // Array of { id, x, y, ... }

  // 1) On load, set up positions
  useEffect(() => {
    if (!initialPins.length) return;
    let updatedPositions = [];
    let hasNewPins = false;

    if (sanityBoardDoc && sanityBoardDoc.pinPositions?.length) {
      const savedMap = {};
      sanityBoardDoc.pinPositions.forEach((pos) => {
        savedMap[pos.pinId] = pos;
      });
      updatedPositions = initialPins.map((pinDoc) => {
        if (savedMap[pinDoc._id]) {
          return {
            id: pinDoc._id,
            title: pinDoc.title,
            type: pinDoc.type,
            size: pinDoc.size || 80,
            fallbackColor: pinDoc.fallbackColor,
            pinImageUrl: pinDoc.pinImage?.asset?.gatsbyImageData || null,
            x: savedMap[pinDoc._id].x,
            y: savedMap[pinDoc._id].y,
          };
        } else {
          hasNewPins = true;
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
        }
      });
    } else {
      updatedPositions = initialPins.map((pinDoc) => {
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
      hasNewPins = true;
    }

    setPins(initialPins);
    setPositions(updatedPositions);

    if (hasNewPins) {
      if (sanityBoardDoc && sanityBoardDoc._id) {
        saveNewPositions(updatedPositions, sanityBoardDoc._id);
      } else {
        createUserBoardDoc(updatedPositions);
      }
    }
  }, [initialPins, sanityBoardDoc]);

  // 2) Save positions to Sanity when updated
  useEffect(() => {
    if (!positions.length) return;
    savePositionsToSanity(positions);
  }, [positions]);

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
    try {
      const userBoardDoc = await client.fetch(
        `*[_type == "userBoard" && userId == $uid][0]`,
        { uid: userId },
      );
      if (!userBoardDoc) {
        await createUserBoardDoc(positionsToSave);
      } else {
        await saveNewPositions(positionsToSave, userBoardDoc._id);
      }
    } catch (err) {
      console.error("Error saving pin positions:", err);
    }
  }

  // 3) Drag and drop handlers
  function handleDrop(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    if (!data) return;
    const { pinId, offsetX, offsetY } = JSON.parse(data);
    const boardRect = e.currentTarget.getBoundingClientRect();
    const dropX = e.clientX - boardRect.left - offsetX;
    const dropY = e.clientY - boardRect.top - offsetY;
    if (dropX < RESERVED_WIDTH && dropY < RESERVED_HEIGHT) return;
    const maxSize = 120;
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

  return (
    <div
      style={{
        width: BOARD_WIDTH,
        height: BOARD_HEIGHT,
        position: "relative",
        background: "#deb887",
        overflow: "hidden",
        margin: "auto",
        border: "2px solid #333",
      }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
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
      {positions.map((pin) => (
        <Pin key={pin.id} pin={pin} />
      ))}
    </div>
  );
};

export default CorkBoard;
