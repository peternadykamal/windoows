import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function getTime() {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format
    const timeString = `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${ampm}`;
    return timeString;
  }

  return <span>{time}</span>;
};

export default Clock;
