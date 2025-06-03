"use client";

import { useState, useEffect } from "react";
import AnimatedIntroCursor from "./AnimatedIntroCursor";
import TypewriterText from "./TypewriterText";

interface TitleEffectProps {
  onComplete: () => void;
}

export default function TitleEffect({ onComplete }: TitleEffectProps) {
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    if (showSecond && showArrow) {
      const timer = setTimeout(() => {
        onComplete();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showSecond, showArrow, onComplete]);

  return (
    <div className="text-4xl min-h-screen flex flex-col items-center justify-center gap-12">
      {!showFirstLine && (
        <AnimatedIntroCursor onComplete={() => setShowFirstLine(true)} />
      )}

      {showFirstLine && (
        <TypewriterText
          text="TRANSCENDENCE"
          speed={100}
          onComplete={() => {
            setTimeout(() => setShowSecond(true), 1500);
          }}
          showCursor={true}
          cursorAlwaysOn={true}
        />
      )}

      {showSecond && (
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <TypewriterText
          text="SCROLL DOWN TO GETTING STARTED"
          speed={50}
          showCursor={true}
          onComplete={() => setShowArrow(true)}
          className="text-xl text-white mb-6 text-center"
        />
        <div
          className={`text-3xl text-white ${
            showArrow ? "animate-slideUpAndBounce visible" : "invisible"
          }`}
          style={{ minHeight: "1.5em"}}
        >
          ↓
        </div>
      </div>
      )}
    </div>
  );
}
