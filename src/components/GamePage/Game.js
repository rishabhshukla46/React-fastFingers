import React, { useEffect, useRef } from "react";
import "./Game.css";
import Play from "../../images/playerIcon.svg";
import keyboard from "../../images/keyBoard.svg";
import Gamepad from "../../images/gamepad.svg";
import Stop from "../../images/stop.svg";
import Timer from "../Timer";
import GameWord from "../../data/GameWord";

const makeTime = (time) => {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
};
const newGameLevel = (level) => {
  if (level < 1.5) return "Easy";
  if (level < 2) return "Medium";
  return "Hard";
};
export default function Game({
  user,
  word,
  score,
  scoreArray,
  handleTextChange,
  inputWord,
  quitGame,
  gameLevel,
  setScore,
  setBestScore,
  setGame,
  bestScore,
  game
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [word]);
  let isCovered = false;
  const pastScores = scoreArray
    .slice(0)
    .reverse()
    .map((eachScore, i) => {
      if (i < 9) {
        const idx = scoreArray.length;
        if (!isCovered && eachScore === bestScore) {
          isCovered = true;
          return (
            <p style={{ color: "green", borderBlock: 1 }}>
              GAME {idx - i} - {makeTime(eachScore)}
              <span style={{ color: "red", fontSize: 10 }}>*high score</span>
            </p>
          );
        }
        return (
          <p key={i}>
            GAME {idx - i} - {makeTime(eachScore)}
          </p>
        );
      }
    });
  return (
    <div>
      <div className="game-header">
        <div className="userInfo">
          <div className="card">
            <img src={Play} alt="playerIcon"></img>
            <p>{user.name}</p>
          </div>
          <div className="card">
            <img src={Gamepad} alt="gamepad"></img>
            <p>LEVEL: {newGameLevel(gameLevel)}</p>
          </div>
        </div>
        <div className="userInfo">
          <div className="card">
            <img src={keyboard} alt="gamepad"></img>
            <p>fast fingers</p>
          </div>
          <div className="card">SCORE: {makeTime(score)}</div>
        </div>
      </div>
      <div className="game-bar">
        <div className="left-bar">
          <div className="score-board">
            <div className="score-heading">SCORE BOARD</div>
            <div className="scores">{pastScores}</div>
          </div>
        </div>
        <div className="main-game">
          <Timer
            word={word}
            gameLevel={gameLevel}
            time={Math.max((word.length / gameLevel).toFixed(2), 2)}
            updateScore={(e) => {
              const newScore = score + e;
              if (newScore > bestScore) {
                setBestScore(newScore);
              }
              setScore(newScore);
            }}
            quitGame={quitGame}
          />
          <div className="game-word">
            <p>
              {word.split("").map((char, i) => {
                let color;

                if (i < inputWord.length) {
                  if (char === inputWord.charAt(i).toUpperCase()) {
                    color = "green";
                  } else {
                    color = "blue";
                  }
                }
                return (
                  <span key={i} style={{ color: color }}>
                    {char}
                  </span>
                );
              })}
            </p>
          </div>
          <div className="input-word">
            <input
              type="text"
              autoComplete="off"
              name="inputWord"
              value={inputWord}
              onChange={handleTextChange}
              ref={inputRef}
            />
          </div>
        </div>
      </div>
      <button className="stop-game" onClick={quitGame}>
        <div className="play-image">
          <img src={Stop} alt="stop" />
        </div>
        <div className="stop-quitGame">STOP GAME</div>
      </button>
    </div>
  );
}
