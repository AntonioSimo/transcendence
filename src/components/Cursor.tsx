"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const BlinkingCursor = () => {
    // Creates a React ref called `cursorRef` that will hold a reference to a <div> element.
    // The generic type <HTMLDivElement> tells TypeScript this ref will point to a div in the DOM.
    // It's initialized with `null` because the ref doesn't point to anything yet.
    const cursorRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
    if (cursorRef.current) {
    gsap.to(cursorRef.current, { //animates an element from its current state to a specified end state
        opacity: 0,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "none",
        delay: 0.2,
      });
    }
  }, []);

  return (
    <div
      ref={cursorRef}
      className="w-2 h-10 bg-white inline-block ml-3 align-middle"
    />
  );
};
  
  export default BlinkingCursor;