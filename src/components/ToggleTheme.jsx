import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../contexts/Theme";

function ToggleTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      return currentTheme === "light" ? "dark" : "light";
    });
  };
  return (
    <button onClick={toggleTheme} className={`button__${theme}`}>
      Change Theme
    </button>
  );
}

export default ToggleTheme;
