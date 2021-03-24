import React from "react";
import "./End.css";
import { BsFillPersonFill } from 'react-icons/bs';
import { FaGamepad, FaKeyboard, FaRedoAlt } from 'react-icons/fa';

export default function End({ user, score, scoreLen, setGame }) {
  return (
    <div className="endGame">
      <div className="game-header">
        <div className="userInfo">
          <div className="card">
            <BsFillPersonFill />
            <div className="card-text">{user.name}</div>
          </div>
          <div className="card">
            <FaGamepad />
            <div className="card-text">{user.level}</div>
          </div>
        </div>
        <div className="userInfo">
          <div className="card">
            <FaKeyboard />
            <div className="card-text">fast fingers</div>
          </div>
        </div>
      </div>
      <div className="end-game">
        <div className="end-header">SCORE : GAME {scoreLen + 1}</div>
        <div className="score-card">{score}</div>
        <button className="play-again" onClick={setGame}>
          <div className="redo">
            <FaRedoAlt />
          </div>
          <div className="redo-btn">PLAY AGAIN</div>
        </button>
      </div>
      <button className="quit-game" onClick={() => location.reload()}>
          <div className="quit-btn">QUIT</div>
      </button>
    </div>
  );
}
