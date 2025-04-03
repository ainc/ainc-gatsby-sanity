import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Pin = ({ pin, onDragEnd }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e) => {
    setIsDragging(true);
    const rect = e.currentTarget.getBoundingClientRect();
    e.dataTransfer.setData(
      "text/plain",
      JSON.stringify({
        pinId: pin.id,
        offsetX: e.clientX - rect.left,
        offsetY: e.clientY - rect.top,
      }),
    );
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (onDragEnd) {
      onDragEnd(pin.id);
    }
  };

  const style = {
    position: "absolute",
    left: pin.x,
    top: pin.y,
    width: pin.size,
    height: pin.size,
    cursor: "grab",
    border: "2px solid #333",
    zIndex: isDragging ? 9999 : 1,
    overflow: "hidden",
  };

  return (
    <div
      style={style}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {pin.pinImageUrl ? (
        <GatsbyImage
          image={pin.pinImageUrl}
          alt={pin.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: pin.fallbackColor || "#ccc",
          }}
        />
      )}
    </div>
  );
};

export default Pin;
