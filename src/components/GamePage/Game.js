import React, { useEffect, useRef } from "react";
import "./Game.css";
import Timer from "../Timer";
import GameWord from "../../data/GameWord";
import { BsFillPersonFill } from 'react-icons/bs';
import { FaGamepad, FaKeyboard } from 'react-icons/fa';

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
            <p style={{color: "#1d3557", fontWeight: 600}}>
              GAME {idx - i} - {makeTime(eachScore)}
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
    <div className="gamePage">
      <div className="left-bar">
          <div className="score-board">
            <div className="score-heading">SCORE BOARD</div>
            <div className="scores">{pastScores}</div>
          </div>
          <button className="stop-game" onClick={quitGame}>
            <div className="stop-quitGame">STOP GAME</div>
          </button>
        </div>
      <div className="game-bar">
      <div className="game-header">
        <div className="userInfo">
          <div className="card">
            <BsFillPersonFill />
            <div className="card-text">{user.name}</div>
          </div>
          <div className="card">
            <FaGamepad />
            <div className="card-text">{newGameLevel(gameLevel)}</div>
          </div>
        </div>
        <div className="userInfo">
          <div className="card">
            <FaKeyboard />
            <div className="card-text">fast fingers</div>
          </div>
          <div className="card" style={{fontWeight : 600}}>SCORE: {makeTime(score)}</div>
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
                    color = "var(--bkg-color, #1d3557)";
                  } else {
                    color = "#e63946";
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
      
    </div>
  );
}
