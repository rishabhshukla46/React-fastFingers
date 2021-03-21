import React, { useEffect, useState } from "react";
import GameWord from "../data/GameWord";
import Timer from "./Timer";
import Game from "./GamePage/Game";
import End from "./EndGame/End";

const CONFIG_LEVEL = {
  Easy: 1,
  Medium: 1.5,
  Hard: 2
};
const CONFIG_FACTOR = 0.01;

const makeTime = (time) => {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
};

export default function GamePage({ user }) {
  const [game, setGame] = useState(true);
  const [gameWord, setGameWord] = useState("");
  const [gameLevel, setGameLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [scoreArray, setScoreArray] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [inputWord, setInputWord] = useState("");
  const [lastScore, setLastScore] = useState(0);

  useEffect(() => {
    let scoreUpdate;
    if (game) {
      scoreUpdate = setInterval(() => {
        setScore(score + 1);
      }, 1000);
    } else {
      clearInterval(scoreUpdate);
    }
    return () => {
      clearInterval(scoreUpdate);
    };
  }, [score]);

  const playAgain = () => {
    setGame(!game);
    changeWord();
    setScore(0);
    const newGameLevel = CONFIG_LEVEL[user.level];
    setGameLevel(newGameLevel);
  };

  const handleTextChange = (e) => {
    const newTypedWord = e.target.value;
    if (gameWord === newTypedWord.toUpperCase()) {
      changeWord();
      setInputWord("");
    } else {
      setInputWord(e.target.value);
    }
  };

  useEffect(() => {
    const newGameLevel = CONFIG_LEVEL[user.level];
    setGameLevel(newGameLevel);
    setGameWord(GameWord(newGameLevel).toUpperCase());

    return () => {
      setGameLevel(0);
      setGameWord("");
    };
  }, []);

  const changeWord = () => {
    const newGameLevel = gameLevel + CONFIG_FACTOR;
    setGameLevel(newGameLevel);
    const newWord = GameWord(newGameLevel);
    setGameWord(newWord.toUpperCase());
    setInputWord("");
  };

  const quitGame = () => {
    setGame(!game);
    const newScore = score;
    setLastScore(newScore);
    if (newScore > bestScore) {
      setBestScore(newScore);
    }
  };

  if (game) {
    return (
      <div>
        <Game
          user={user}
          word={gameWord}
          inputWord={inputWord}
          score={score}
          scoreArray={scoreArray}
          handleTextChange={handleTextChange}
          quitGame={quitGame}
          gameLevel={gameLevel}
          setScore={setScore}
          setBestScore={setBestScore}
          setGame={setGame}
          bestScore={bestScore}
          game={game}
        />
      </div>
    );
  } else {
    return (
      <End
        user={user}
        score={makeTime(lastScore)}
        scoreLen={scoreArray.length}
        setGame={() => {
          setScoreArray([...scoreArray, lastScore]);
          setScore(0);
          playAgain();
        }}
      />
    );
  }
}
