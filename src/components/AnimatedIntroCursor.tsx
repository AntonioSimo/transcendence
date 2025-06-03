"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface AnimatedCursorProps {
  onComplete: () => void;
}

const AnimatedIntroCursor: React.FC<AnimatedCursorProps> = ({ onComplete }) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cursorRef.current) {
      gsap.fromTo(
        // Animate the cursor from its initial state to a rectangular shape
        cursorRef.current,
        { opacity: 1, scale: 1, borderRadius: "50%" },
        {
          opacity: 0,
          duration: 0.6,
          repeat: 5,
          yoyo: true,
          ease: "power1.inOut",
          onComplete: () => {
            // After the animation completes, change the cursor style
            gsap.to(cursorRef.current, {
              borderRadius: "0%",
              width: "8px",
              height: "40px",
              duration: 1.2, 
              ease: "power3.out",
              onComplete: () => {
                onComplete();
              },
            });
          },
        }
      );
    }
  }, [onComplete]);

  return (
    <div
      ref={cursorRef}
      className="bg-white absolute top-1/2 left-1/2"
      style={{
        width: "40px",
        height: "40px",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default AnimatedIntroCursor;
