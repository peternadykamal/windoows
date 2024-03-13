// using tailwindcss , create a componenet like the taskbar in windows
// which is divide into 3 parts, left part : for start button, which only takes the space of the start button
// the right part : which takes the space of the system tray icons
// the middle part : which contains the open windows

// taskbar color: 202021
// hover color : 3a3a3b
import React from "react";
import { FaWindows } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import Clock from "./Clock";
import DateDisplay from "./DateDisplay";
import NotificationArea from "./NotificationArea";
import DndApps from "./DndApps";

const Taskbar = ({ apps }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex h-10 justify-between bg-[#202021]/80 text-white backdrop-blur-md">
      {/* left part */}
      <button className="group flex-none px-4 hover:bg-hover-gray">
        <FaWindows className="h-5 group-hover:fill-blue-500" />
      </button>

      {/* middle part */}
      <div className="grow">
        <DndApps apps={apps} />
      </div>

      {/* right part */}
      <div className="flex flex-none">
        <NotificationArea></NotificationArea>
        <button className="px-2 text-xs font-semibold hover:bg-hover-gray">
          ENG
        </button>
        <button className="flex h-full flex-col  justify-center space-y-1 px-1 text-center text-xs font-semibold hover:bg-hover-gray">
          <Clock />
          <DateDisplay />
        </button>
        <button className="px-3 hover:bg-hover-gray">
          <FaRegMessage className="h-10" />
        </button>
        <button className="ml-2 border-l-[1px] border-gray-300 pl-1 hover:bg-hover-gray"></button>
      </div>
    </div>
  );
};

export default Taskbar;
