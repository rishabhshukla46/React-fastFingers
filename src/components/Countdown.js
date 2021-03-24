import React from "react";
import "./Countdown.css";

const makeTime = (time) => {
  let seconds = time.split(".")[0];
  let miliSeconds = time.split(".")[1];
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${seconds}:${miliSeconds}`;
};

const colorPath = (time, timePassed) => {
  const path = (((time - timePassed) / time) * 283).toFixed(0);
  return `${path} 283`;
};


const pickColor = (time, timePassed) => {
  if(time-timePassed < 1)return "#e63946";
  return "var(--bkg-color, #1d3557)";
}

export default function Countdown({ count, time, timePassed }) {
  return (
    <div className="countdown">
      <div className="base-timer">
        <svg
          className="base-timer__svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="base-timer__circle">
            <circle
              className="base-timer__path-elapsed"
              cx="50"
              cy="50"
              r="45"
            />
            <path
              id="base-timer-path-remaining"
              strokeDasharray={colorPath(time, timePassed.toFixed(2))}
              className="base-timer__path-remaining"
              d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
              "
              style= {{stroke:`${pickColor(time, timePassed)}`}}
            ></path>
          </g>
        </svg>
        <span className="base-timer__label">{makeTime(count)}</span>
      </div>
    </div>
  );
}
