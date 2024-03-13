import React, { useState } from "react";

class Coordinates {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const SelectRectangle = ({ cursorX, cursorY }) => {
  const [isSelecting, setIsSelecting] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });
  const [end, setEnd] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsSelecting(true);
    setStart(new Coordinates(e.clientX, e.clientY));
  };

  const handleMouseMove = (e) => {
    if (isSelecting) {
      setEnd(new Coordinates(cursorX, cursorY));
    } else {
      setStart(new Coordinates(cursorX, cursorY));
      setEnd(new Coordinates(cursorX, cursorY));
    }
  };

  const handleMouseUp = () => {
    setIsSelecting(false);
    // Here you can implement logic to determine the selected items
    // console.log("Selected items:", { startX, startY, endX, endY });
  };

  const getStyle = () => {
    if (cursorX < start.x && cursorY < start.y) {
      return "";
    } else if (cursorX < start.x && cursorY > start.y) {
      return "-translate-y-full";
    } else if (cursorX > start.x && cursorY < start.y) {
      return "-translate-x-full";
    } else if (cursorX > start.x && cursorY > start.y) {
      return "-translate-x-full -translate-y-full";
    } else {
      return "opacity-0";
    }
  };

  return (
    <div
      className="bg-white\0 absolute size-4 -translate-x-1/2 -translate-y-1/2 transform  rounded-full shadow-lg"
      style={{ top: cursorY, left: cursorX }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {isSelecting && (
        <div
          className={
            "border-2 border-blue-500 bg-blue-400 opacity-50" + " " + getStyle()
          }
          style={{
            width: Math.abs(end.x - start.x),
            height: Math.abs(end.y - start.y),
          }}
        ></div>
      )}
    </div>
  );
};

export default SelectRectangle;
