import React, { useState } from "react";
import { motion } from "framer-motion";
import { PIN_SIZE } from "./randomPlacement";

const Pin = ({ pin, setHoveredStory }) => {
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

  return (
    <motion.div
      style={{
        position: "absolute",
        left: pin.x,
        top: pin.y,
        width: PIN_SIZE,
        height: PIN_SIZE,
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
        src={pin.icon || "/images/default-pin.png"}
        alt={pin.pinName}
        style={{ width: 70, height: "auto" }}
        onError={(e) => (e.target.src = "/images/default-pin.png")}
      />
    </motion.div>
  );
};

export default Pin;
