import React from "react";
import { useTheme } from "../ThemeUtils";

import "./styles/Toggle.css";

// Import the SVGs as components with SVGR for styling
import SunIcon from "../assets/icons/sun.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";

export const Toggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      id="darkmode-toggle"
      onClick={toggleTheme}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
      }}
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? (
        <MoonIcon className="toggle-icon" />
      ) : (
        <SunIcon className="toggle-icon" />
      )}
    </button>
  );
};
