import { Data } from "./Words";
import React, { useEffect, useState } from "react";

const getRandomWord = (array) => {
  return array[Math.floor(Math.random() * (array.length - 1))];
};

export default function GameWord(level) {
  const easyWords = [];
  const mediumWords = [];
  const hardWords = [];

  for (let word of Data) {
    if (word.length <= 4) {
      easyWords.push(word);
    } else if (word.length <= 8) {
      mediumWords.push(word);
    } else {
      hardWords.push(word);
    }
  }

  let gameWord = "";
  if (level < 1.5) {
    gameWord = getRandomWord(easyWords);
  } else if (level < 2) {
    gameWord = getRandomWord(mediumWords);
  } else {
    gameWord = getRandomWord(hardWords);
  }

  return gameWord;
}
