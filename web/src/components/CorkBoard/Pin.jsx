import React, { useState } from "react";
import { motion } from "framer-motion";
import { PIN_SIZE } from "./randomPlacement";

const Pin = ({ pin, setHoveredStory, pinType, imgLinks }) => {
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

  let imgSrc = "/images/default-pin.png"
  switch(pinType){
    case "Be Good":
      imgSrc = imgLinks[0].source;
      break;
    case "Be Excellent":
      imgSrc = imgLinks[1].source;
      break;
    case "Be A Friend":
      imgSrc = imgLinks[2].source;
      break;
    case "Be You":
      imgSrc = imgLinks[3].source;
      break;
    case "Billi":
      imgSrc = imgLinks[4].source;
      break;
    case "Oreo":
      imgSrc = imgLinks[5].source;
      break;
    case "Balloon":
      imgSrc = imgLinks[6].source;
      break;
    case "5 Across":
      imgSrc = imgLinks[7].source;
      break;
    case "Success Bell":
      imgSrc = imgLinks[8].source;
      break;
    case "Startup Rocket":
      imgSrc = imgLinks[9].source;
      break;
    case "Triangle Pin":
      imgSrc = imgLinks[10].source;
      break;
  }

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
        src={imgSrc}
        alt={pin.pinName}
        style={{ width: 70, height: "auto" }}
        onError={(e) => (e.target.src = "/images/default-pin.png")}
      />
    </motion.div>
  );
};

export default Pin;
