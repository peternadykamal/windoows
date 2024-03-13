import React from "react";
import { IoWifi } from "react-icons/io5";
import { RxSpeakerLoud } from "react-icons/rx";
import { SlArrowUp } from "react-icons/sl";

function NotificationIconButton({ children }) {
  return <button className="hover:bg-hover-gray px-1">{children}</button>;
}

function NotificationArea() {
  return (
    <>
      <NotificationIconButton>
        <SlArrowUp className="h-3" />
      </NotificationIconButton>
      <NotificationIconButton>
        <IoWifi />
      </NotificationIconButton>
      <NotificationIconButton>
        <RxSpeakerLoud />
      </NotificationIconButton>
    </>
  );
}

export default NotificationArea;
