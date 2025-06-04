"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import TypewriterText from "./TypewriterText";

gsap.registerPlugin(ScrollTrigger);

export default function ThirdPanel() {
  const [showSinglePlayer, setShowSinglePlayer] = useState(false);
  const [showTournment, setShowTournment] = useState(false);
  const [showAccountSettings, setShowAccountSettings] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top center",
      once: true,
      onEnter: () => setShowSinglePlayer(true),
    });

    return () => trigger.kill();
  }, []);

  return (
    <div
      ref={containerRef}
      className="text-4xl min-h-screen w-full flex items-center justify-start bg-blue-1000 pl-50">

      <div className="flex flex-col items-center gap-y-20">
        {showSinglePlayer && (
          <TypewriterText
            text="SINGLE PLAYER"
            speed={100}
            onComplete={() => setShowTournment(true)}
            showCursor={!showTournment}
            cursorAlwaysOn={true}
          />
        )}

        {showTournment && (
          <TypewriterText
            text="MULTIPLAYER"
            speed={100}
            onComplete={() => setShowAccountSettings(true)}
            showCursor={!showAccountSettings}
            cursorAlwaysOn={true}
          />
        )}

        {showAccountSettings && (
          <TypewriterText
            text="TOURNAMENT"
            speed={100}
            showCursor={true}
            cursorAlwaysOn={true}
          />
        )}
      </div>
    </div>
  );
}
