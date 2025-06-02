"use client";

import { useState } from "react";
import AnimatedIntroCursor from "./AnimatedIntroCursor";
import TypewriterText from "./TypewriterText";

export default function TitleEffect() {
  const [showFirstLine, setShowFirstLine] = useState(false); // State to control the visibility of the first line
  const [showSecond, setShowSecond] = useState(false); // State to control the visibility of the second line
  const [startErase, setStartErase] = useState(false);

  return (
    <div className="text-4xl min-h-screen flex flex-col items-center justify-center gap-12">
      {!showFirstLine && (
        <AnimatedIntroCursor onComplete={() => setShowFirstLine(true)} />
      )}

      {showFirstLine && (
        <TypewriterText
          text="Transcendence"
          speed={100}
          onComplete={() => setShowSecond(true)}
          showCursor={!showSecond}
          erase={startErase}
          onEraseComplete={() => console.log("Erase done")}
        />
      )}

      {showSecond && (
        <TypewriterText
          text="scroll down to getting started"
          speed={50}
          showCursor={true}
          cursorAlwaysOn={true}
          erase={startErase}
          onEraseComplete={() => console.log("Erase done")}
        />
      )}
    </div>
  );
}
