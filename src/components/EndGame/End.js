import React from "react";
import "./End.css";
import Play from "../../images/playerIcon.svg";
import keyboard from "../../images/keyBoard.svg";
import Gamepad from "../../images/gamepad.svg";
import redo from "../../images/redo.svg";

export default function End({ user, score, scoreLen, setGame }) {
  return (
    <div className="endGame">
      <div className="game-header">
        <div className="userInfo">
          <div className="card">
            <img src={Play} alt="playerIcon"></img>
            <p>{user.name}</p>
          </div>
          <div className="card">
            <img src={Gamepad} alt="gamepad"></img>
            <p>{user.level}</p>
          </div>
        </div>
        <div className="userInfo">
          <div className="card">
            <img src={keyboard} alt="gamepad"></img>
            <p>fast fingers</p>
          </div>
        </div>
      </div>
      <div className="end-game">
        <div className="end-header">SCORE : GAME {scoreLen + 1}</div>
        <div className="score-card">{score}</div>
        <button className="play-again" onClick={setGame}>
          <div className="redo">
            <img src={redo} alt="redo" />
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
