import React, { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import GamePage from "./components/GamePage";
import "./styles.css";

export default function App() {
  const [user, setUser] = useState({ name: "", level: "Easy" });
  const [game, setGame] = useState(false);

  const handleThemeChange = (e) => {
    switch (e.target.value) {
      case "Light":
        root.style.setProperty("--bkg-color", "#1d3557");
        root.style.setProperty("--box-bkg", "#f1faee");
        root.style.setProperty("--img-color", "#1d3557");
        root.style.setProperty("--text-type1", "#1d3557");
        root.style.setProperty("--text-type2", "#457b9d");
        root.style.setProperty("--input-type1", "#f1faee");
        break;
      case "Dark":
        root.style.setProperty("--bkg-color", "#cad2c5");
        root.style.setProperty("--box-bkg", "#2f3e46");
        root.style.setProperty("--img-color", "#cad2c5");
        root.style.setProperty("--text-type1", "#cad2c5");
        root.style.setProperty("--text-type2", "#84a98c");
        root.style.setProperty("--input-type1", "#2f3e46");
    }
  };

  const welcomePage = (
    <WelcomePage
      user={user}
      onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
      onSubmit={() => setGame(true)}
      handleThemeChange={handleThemeChange}
    />
  );

  const gamePage = <GamePage user={user} />;

  const content = game ? gamePage : welcomePage;

  return (
    <div className="App">
      <select
        className="theme-switcher"
        type="text"
        autoComplete="off"
        name="theme"
        onChange={handleThemeChange}
      >
        <option className="option" value="">
          Change Theme
        </option>
        <option className="option" value="Light">
          Light
        </option>
        <option className="option" value="Dark">
          Dark
        </option>
      </select>
      {content}
    </div>
  );
}
