import React, { useState, useEffect } from "react";
import "./styles/TypeWriterEffect.css";

const TypeWriterEffect = ({ sentences = [], speed = 50, pauseTime = 1000 }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [sentenceIndex, setSentenceIndex] = useState(0);

  useEffect(() => {
    if (sentences.length === 0) return;

    const currentText = sentences[sentenceIndex];
    let timeout;

    if (!isDeleting && index < currentText.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, index + 1));
        setIndex(index + 1);
      }, speed);
    } else if (!isDeleting && index === currentText.length) {
      // Done typing, pause then start deleting
      timeout = setTimeout(
        () => {
          setIsDeleting(true);
        },
        sentenceIndex % sentences.length === sentences.length - 1
          ? pauseTime * 6
          : pauseTime
      );
    } else if (isDeleting && index > 0) {
      // Deleting
      timeout = setTimeout(
        () => {
          setDisplayText(currentText.slice(0, index - 1));
          setIndex(index - 1);
        },
        speed / 2
        // // Deleting is faster unless currently on last sentence
        // sentenceIndex % sentences.length === sentences.length - 1
        //   ? speed * 5
        //   : speed / 2
      );
    } else if (isDeleting && index === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setSentenceIndex((prev) => (prev + 1) % sentences.length);
      }, pauseTime);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, sentenceIndex, sentences, speed, pauseTime]);

  return <div className="typewriterText">{displayText}</div>;
};

export default TypeWriterEffect;
