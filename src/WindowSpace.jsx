import React from "react";
import { useState } from "react";
import SelectRectangle from "./SelectRectangle";

function WindowSpace({ children }) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const updateCursorPosition = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className=" grow" onMouseMove={updateCursorPosition}>
      {/* <FollowCursor x={cursorPosition.x} y={cursorPosition.y} /> */}
      <SelectRectangle cursorX={cursorPosition.x} cursorY={cursorPosition.y} />
      {children}
    </div>
  );
}

const FollowCursor = ({ x, y }) => {
  return (
    <div
      className="absolute left-0 top-0  h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white shadow-lg"
      style={{ top: y, left: x }}
    >
      {/* Your content that follows the cursor */}
      <div className="h-8 w-8 rounded-full bg-red-500"></div>
    </div>
  );
};

export default WindowSpace;
