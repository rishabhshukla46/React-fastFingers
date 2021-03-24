import React, { useState, useEffect } from "react";
import startGameIcon from "../images/startGameIcon.svg";
import keyboard from "../images/keyBoard.svg";
import Welcome from "./WelcomePage/Welcome";
import useSound from 'use-sound';
import errorSound from "../audio/errorSound.wav";


export default function WelcomePage({ user, onChange, onSubmit, handleThemeChange }) {
  const [nameError, setNameError] = useState(false);
  const [levelError, setLevelError] = useState(false);
  const [errorAudio] = useSound(errorSound);

  const nameErrorMessage = (
    <span className="error">Please Enter Your Name</span>
  );
  const levelErrorMessage = <span className="error">Please Select Level</span>;

  const localOnChange = (e) => {
    if (e.target.name === "name" && e.target.value === "") {
      setNameError(true);
      errorAudio();
    } else if (e.target.name === "level" && e.target.value === "") {
      setLevelError(true);
      errorAudio();
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
      errorAudio();
    } else if (user.level === "") {
      setLevelError(true);
      errorAudio();
    } else {
      // audio();
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
      handleThemeChange={handleThemeChange}
    />
  );
}
