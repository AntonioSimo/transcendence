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
      // Animazione cerchio che lampeggia 3 volte
      gsap.fromTo(
        cursorRef.current,
        { opacity: 1, scale: 1, borderRadius: "50%" },
        {
          opacity: 0,
          duration: 0.6,
          repeat: 5, // 3 lampeggi = 6 fade in/out, repeat counts the fades
          yoyo: true,
          ease: "power1.inOut",
          onComplete: () => {
            // Morph da cerchio a cursore
            gsap.to(cursorRef.current, {
              borderRadius: "0%",
              width: "8px",
              height: "40px",
              duration: 1.2,
              ease: "power3.out",
              onComplete: () => {
                onComplete(); // Avvisa che l'animazione è finita
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
      className="bg-white fixed top-1/2 left-1/2"
      style={{
        width: "40px",
        height: "40px",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default AnimatedIntroCursor;
