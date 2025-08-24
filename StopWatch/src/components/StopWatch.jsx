import React, { useState, useEffect } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0); // time in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 100);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  // Format time as HH:MM:SS
  const formatTime = (timeInSeconds) => {
    const hours = String(Math.floor(timeInSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((timeInSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(timeInSeconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="stopwatch-container">
      <h1 className="stopwatch-time">{formatTime(time)}</h1>
      <div className="buttons">
        <button className="btn start" onClick={() => setIsRunning(true)}>Start</button>
        <button className="btn stop" onClick={() => setIsRunning(false)}>Stop</button>
        <button className="btn reset" onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
}
