import React, { useState, useEffect } from "react";

const DateDisplay = () => {
  const [currentDate, setCurrentDate] = useState(getCurrentDate());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(getCurrentDate());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function getCurrentDate() {
    const date = new Date();
    const month = date.getMonth() + 1; // Month is zero-based
    const day = date.getDate();
    const year = date.getFullYear();
    const dateString = `${month}/${day}/${year}`;
    return dateString;
  }

  return <span>{currentDate}</span>;
};

export default DateDisplay;
