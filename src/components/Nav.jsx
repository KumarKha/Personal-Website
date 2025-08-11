import React from "react";
import "./styles/Nav.css";
import { Toggle } from "./Toggle";
export const Nav = () => {
  return (
    <nav>
      <div className="nav-container nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        <Toggle />
      </div>
    </nav>
  );
};
