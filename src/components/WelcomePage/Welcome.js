import React, { useState } from "react";
import "./Welcome.css";
import start from "../../images/startGameIcon.svg";
import keyboard from "../../images/keyBoard.svg";

export default function Welcome({
  user,
  onChange,
  onSubmit,
  nameError,
  levelError,
  levelErrorMessage,
  nameErrorMessage
}) {
  return (
    <div className="welcome-page">
      <div className="header">
        <div className="main-image">
          <img src={keyboard} alt="keyboard" />
        </div>
        <p className="heading">Fast Fingers</p>
        <div className="sub-heading">
          <p className="sub-line">The Ultimate Typing Game</p>
        </div>
      </div>
      <form className="form-data" onSubmit={onSubmit}>
        <div className="form-field">
          <input
            type="text"
            placeholder="TYPE YOUR NAME"
            autoComplete="off"
            name="name"
            value={user.name}
            onChange={onChange}
          />
        </div>
        {nameError ? nameErrorMessage : ""}
        <div className="form-field">
          <select
            className="select"
            type="text"
            autoComplete="off"
            name="level"
            value={user.level}
            onChange={onChange}
          >
            <option className="option" value="">
              DIFFICULTY LEVEL
            </option>
            <option className="option" value="Easy">
              Easy
            </option>
            <option className="option" value="Medium">
              Medium
            </option>
            <option className="option" value="Hard">
              Hard
            </option>
          </select>
        </div>
        {levelError ? levelErrorMessage : ""}
        <button className="start-game" type="submit">
          <div className="play-image">
            <img src={start} alt="play" />
          </div>
          <div className="start-btn">START GAME</div>
        </button>
      </form>
    </div>
  );
}
