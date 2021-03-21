import React, { useEffect, useState } from "react";
import Countdown from "./Countdown";

export default function Timer({
  word,
  gameLevel,
  time,
  updateScore,
  quitGame
}) {
  const [timePassed, setTimePassed] = useState(0);
  useEffect(() => {
    setTimePassed(0);
    return () => {
      setTimePassed(0);
    };
  }, [word]);

  useEffect(() => {
    const tick = setInterval(() => {
      setTimePassed(timePassed + 0.01);
    }, 10);

    return () => {
      clearInterval(tick);
    };
  }, [timePassed]);

  if (Math.ceil(time - timePassed) === 0) {
    quitGame();
  }
  return (
    <Countdown
      count={(time - timePassed).toFixed(2)}
      time={time}
      timePassed={timePassed}
    />
  );
}
