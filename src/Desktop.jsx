import React from "react";

const Desktop = ({ children }) => {
  return (
    <div
      className="fixed inset-0 flex flex-col bg-cover bg-center"
      style={{
        backgroundImage: "url(/desktop_wallpaper.jpg)",
      }}
    >
      {children}
    </div>
  );
};

export default Desktop;
