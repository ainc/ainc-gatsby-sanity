import React, { useEffect, useState } from "react";
import Pin from "./Pin";
import { toast } from "react-toastify";
import {
  BOARD_WIDTH,
  BOARD_HEIGHT,
  RESERVED_WIDTH,
  RESERVED_HEIGHT,
  PIN_SIZE,
  BUFFER,
  calculateGroupBounds,
  randBetween,
} from "./randomPlacement";
import boardImage from "../../images/wood-board-background.jpg";

const EDGE = 10;
const DEBUG_SECTIONS = false;
const norm = (s) => (s || "").trim().toLowerCase();

const clash = (spots, x, y) =>
  spots.some(
    (s) =>
      x < s.x + PIN_SIZE + BUFFER &&
      x + PIN_SIZE + BUFFER > s.x &&
      y < s.y + PIN_SIZE + BUFFER &&
      y + PIN_SIZE + BUFFER > s.y,
  );

const CorkBoard = ({ initialPins = [], onHoverStory, teamMembers = [], imgLinks = [] }) => {
  const [pins, setPins] = useState([]);
  const [groupBounds, setGroupBounds] = useState({});

  const boardName = initialPins[0]?.recipient?.trim() || "Unknown";

  // find the matching team member entry to pull startDate and picture
  const memberEntry = teamMembers.find((t) => norm(t.pinName) === norm(boardName));

  // parse out the year for "Awesome Since"
  const sinceYear = memberEntry?.startDate
    ? new Date(memberEntry.startDate).getFullYear()
    : null;

  const avatar = memberEntry?.pictureUrl || "";

  useEffect(() => {
    const groups = initialPins.map((p) => p.group?.trim() || "No Group");
    setGroupBounds(calculateGroupBounds(groups));
  }, [initialPins]);

  useEffect(() => {
    if (!Object.keys(groupBounds).length) return;

    const taken = [];
    const placed = [];

    initialPins.forEach((p) => {
      if (!p.uniqueId) return;
      const dragKey = p.uniqueId;
      const type = p.pinName

      if (p.x != null && p.y != null) {
        taken.push({ x: p.x, y: p.y });
        placed.push({ ...p, dragKey, type });
        return;
      }

      const lane = groupBounds[p.group?.trim()] || groupBounds["No Group"];
      let ok = false;

      for (let k = 0; k < 1000 && !ok; k++) {
        const x = randBetween(lane.xMin + EDGE, lane.xMax - PIN_SIZE - EDGE);
        const y = randBetween(lane.yMin + EDGE, lane.yMax - PIN_SIZE - EDGE);

        if (x < RESERVED_WIDTH + BUFFER && y < RESERVED_HEIGHT + BUFFER)
          continue;

        if (!clash(taken, x, y)) {
          taken.push({ x, y });
          placed.push({ ...p, dragKey, x, y, type });
          ok = true;
        }
      }

      if (!ok) {
        console.log(`Could not place pin "${p.pinName}"`);
        toast.error(`Could not place ${p.pinName}`);
      }
    });

    setPins(placed);
  }, [initialPins, groupBounds]);

  const handleDrop = async (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    if (!data) return;
    const { uniqueId, offsetX, offsetY } = JSON.parse(data);
    const rect = e.currentTarget.getBoundingClientRect();

    let x = e.clientX - rect.left - offsetX;
    let y = e.clientY - rect.top - offsetY;
    x = Math.max(EDGE, Math.min(x, BOARD_WIDTH - PIN_SIZE - EDGE));
    y = Math.max(EDGE, Math.min(y, BOARD_HEIGHT - PIN_SIZE - EDGE));

    if (x < RESERVED_WIDTH + BUFFER && y < RESERVED_HEIGHT + BUFFER) {
      toast.warn("Cannot place in reserved area");
      return;
    }

    setPins((prev) =>
      prev.map((p) => (p.dragKey === uniqueId ? { ...p, x, y } : p)),
    );

    try {
      await fetch("/api/sheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uniqueId, x, y }),
      });
    } catch {
      toast.error("Failed to save position");
    }
  };

  return (
    <div
      className="mx-auto position-relative"
      style={{
        width: BOARD_WIDTH,
        height: BOARD_HEIGHT,
        border: "3px solid #654321",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19)",
      }}
    >
      {/* fixed profile card */}
      <div
        className="position-absolute"
        style={{
          top: 10,
          left: 10,
          width: RESERVED_WIDTH,
          height: RESERVED_HEIGHT,
          background: "#fff",
          padding: "25px 8px 14px",
          clipPath:
            "polygon(0 0,100% 0,100% 85%,95% 90%,85% 85%,75% 95%,60% 85%,45% 95%,30% 85%,15% 90%,0 85%)",
          textAlign: "center",
          zIndex: 3,
        }}
      >
        <img
          src={avatar}
          alt={`${boardName} avatar`}
          style={{
            width: 90,
            height: 90,
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: 2,
          }}
        />
        <div style={{ fontSize: "1.3rem", fontWeight: 600 }}>{boardName}</div>
        {sinceYear && (
          <div
            style={{
              fontSize: ".7rem",
              fontStyle: "italic",
              color: "#4d4d4d",
            }}
          >
            Awesome&nbsp;Since&nbsp;{sinceYear}
          </div>
        )}
      </div>

      {/* pin canvas */}
      <div
        className="w-100 h-100 position-relative"
        style={{
          backgroundImage: `url(${boardImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {DEBUG_SECTIONS &&
          Object.values(groupBounds).map((b, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                pointerEvents: "none",
                border: "2px dashed rgba(0,0,0,0.25)",
                left: b.xMin,
                top: b.yMin,
                width: b.xMax - b.xMin,
                height: b.yMax - b.yMin,
              }}
            />
          ))}

        {pins.map((p) => (
          <Pin 
            key={p.dragKey} 
            pin={p} 
            setHoveredStory={onHoverStory} 
            pinType={p.type}
            imgLinks={imgLinks}/>
        ))}
      </div>
    </div>
  );
};

export default CorkBoard;
