import React, { useState, useEffect } from "react";
import startGameIcon from "../images/startGameIcon.svg";
import keyboard from "../images/keyBoard.svg";
import Welcome from "./WelcomePage/Welcome";

export default function WelcomePage({ user, onChange, onSubmit }) {
  const [nameError, setNameError] = useState(false);
  const [levelError, setLevelError] = useState(false);

  const nameErrorMessage = (
    <span className="error">Please Enter Your Name</span>
  );
  const levelErrorMessage = <span className="error">Please Select Level</span>;

  const localOnChange = (e) => {
    if (e.target.name === "name" && e.target.value === "") {
      setNameError(true);
    } else if (e.target.name === "level" && e.target.value === "") {
      setLevelError(true);
    } else {
      setLevelError(false);
      setNameError(false);
    }
    onChange(e);
  };

  const localOnSubmit = (e) => {
    e.preventDefault();
    if (user.name === "") {
      setNameError(true);
    } else if (user.level === "") {
      setLevelError(true);
    } else {
      setLevelError(false);
      setNameError(false);
      onSubmit(e);
    }
  };

  return (
    <Welcome
      user={user}
      onChange={localOnChange}
      onSubmit={localOnSubmit}
      nameError={nameError}
      levelError={levelError}
      levelErrorMessage={levelErrorMessage}
      nameErrorMessage={nameErrorMessage}
    />
    // <div className="welcome-page">
    //   <div className="header">
    //     <div className="main-image">
    //       <img src={keyboard} alt="keyboard" />
    //     </div>
    //     <p className="heading">Fast Fingers</p>
    //     <div className="sub-heading">
    //       <p className="sub-line">The Ultimate Typing Game</p>
    //     </div>
    //   </div>
    //   <div className="form-data">
    //     <form onSubmit={localOnSubmit}>
    //       <div className="input-field">
    //         <input
    //           type="text"
    //           placeholder="TYPE YOUR NAME"
    //           name="name"
    //           value={user.name}
    //           onChange={localOnChange}
    //           autoComplete="off"
    //         />
    //         {nameError ? nameErrorMessage : ""}
    //       </div>
    //       <div className="input-field">
    //         <select
    //           type="text"
    //           placeholder="DIFFICULY LEVEL"
    //           name="level"
    //           value={user.level}
    //           onChange={localOnChange}
    //           autoComplete="off"
    //         >
    //           <option value="">DIFFICULY LEVEL</option>
    //           <option value="Easy">Easy</option>
    //           <option value="Medium">Medium</option>
    //           <option value="Hard">Hard</option>
    //         </select>
    //         {levelError ? levelErrorMessage : ""}
    //       </div>
    //       <button className="start-game" type="submit">
    //         <img src={startGameIcon} alt="startGameIcon"></img>
    //         START GAME
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
}
