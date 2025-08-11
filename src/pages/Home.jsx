import React from "react";
import "./styles/Home.css";
import TypeWriterEffect from "../components/TypeWriterEffect";

export const Home = () => {
  return (
    <>
      <div className="home-containter">
        <h1 className="home-text">
          Hi, I'm <span id="name-text">Kumar</span>,
        </h1>
        <div className="typewriter-wrapper">
          <TypeWriterEffect
            sentences={[
              "Full-Stack Developer",
              "Mentor and Educator",
              "Driven by Curiosity and Innovation",
              "Let's Build Something Amazing!",
            ]}
            speed={50}
            pauseTime={1000}
          />
        </div>
      </div>
    </>
  );
};
