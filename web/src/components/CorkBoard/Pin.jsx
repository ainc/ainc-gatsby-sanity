import React, { useState } from "react";
import { motion } from "framer-motion";
import { PIN_SIZE } from "./randomPlacement";

// Row index of each pin type in the "Pin Database" sheet
const PIN_IMAGE_INDEX = {
  "Be Good": 0,
  "Be Excellent": 1,
  "Be a Friend": 2,
  "Be You": 3,
  Billi: 4,
  Oreo: 5,
  Balloon: 6,
  "5 Across": 7,
  "Success Bell": 8,
  "Startup Rocket": 9,
  "Triangle Pin": 10,
  "Work Anniversary": 11,
  "Core Value Training": 12,
  "Winter Retreat 2023": 13,
  "Winter Retreat 2024": 14,
  "Winter Retreat 2025": 15,
};

const DEFAULT_PIN_IMAGE = "/images/default-pin.png";

// Memoized so page-level hover state changes don't re-render every pin
const Pin = React.memo(function Pin({
  pin,
  setHoveredStory,
  pinType,
  imgLinks,
  scale,
  pinScale = 1,
}) {
  const [dragging, setDragging] = useState(false);

  const handleDragStart = (e) => {
    setDragging(true);
    const rect = e.currentTarget.getBoundingClientRect();
    e.dataTransfer.setData(
      "text/plain",
      JSON.stringify({
        uniqueId: pin.dragKey,
        offsetX: e.clientX - rect.left,
        offsetY: e.clientY - rect.top,
      }),
    );
  };

  // Optional chaining keeps a missing row (or a failed pinImages fetch) from
  // crashing the page — the pin just falls back to the default image.
  const imgSrc =
    imgLinks[PIN_IMAGE_INDEX[pinType]]?.source || DEFAULT_PIN_IMAGE;

  return (
    <motion.div
      style={{
        position: "absolute",
        left: pin.x * scale,
        top: pin.y * scale,
        width: PIN_SIZE * scale * pinScale,
        height: PIN_SIZE * scale * pinScale,
        cursor: dragging ? "grabbing" : "grab",
        zIndex: dragging ? 1000 : 1,
      }}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={() => setDragging(false)}
      onMouseEnter={() => setHoveredStory(pin.story || "(No story)")}
      onMouseLeave={() => setHoveredStory("")}
      animate={{ scale: dragging ? 1.1 : 1, rotate: dragging ? "-2deg" : 0 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img
        src={imgSrc}
        alt={pin.pinName}
        loading="lazy"
        decoding="async"
        style={{ width: "100%", height: "auto" }}
        onError={(e) => (e.target.src = DEFAULT_PIN_IMAGE)}
      />
    </motion.div>
  );
});

export default Pin;
