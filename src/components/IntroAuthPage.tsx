"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import TypewriterText from "./TypewriterText";

gsap.registerPlugin(ScrollTrigger);

export default function IntroAuthPage() {
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top center",
      once: true,
      onEnter: () => setShowLogin(true),
    });

    return () => trigger.kill();
  }, []);

  return (
    <div
      ref={containerRef}
      className="text-4xl min-h-screen w-full flex items-center justify-center bg-blue-1000"
    >
      <div className="flex flex-row items-center gap-x-50">
        {showLogin && (
          <div
            className="cursor-pointer"
            onClick={() => router.push("/authentication?mode=login")}
          >
            <TypewriterText
              text="LOG IN"
              speed={100}
              onComplete={() => setShowSignup(true)}
              showCursor={!showSignup}
              cursorAlwaysOn={true}
            />
          </div>
        )}

        {showSignup && (
          <div
            className="cursor-pointer"
            onClick={() => router.push("/authentication?mode=signup")}
          >
            <TypewriterText
              text="SIGN UP"
              speed={100}
              showCursor={true}
              cursorAlwaysOn={true}
            />
          </div>
        )}
      </div>
    </div>
  );
}
