"use client";

import { useEffect, useState } from "react";
import BlinkingCursor from "./Cursor";

    // Definition of the Typewriter component props
    interface Typewriter {
      text: string; //text that will be displayed
      speed?: number; // speed of the typing effect in milliseconds
      onComplete?: () => void; // callback function when the typing is complete
      showCursor?: boolean; // whether to show the blinking cursor
      cursorAlwaysOn?: boolean; // whether the cursor should always be visible
      className?: string;
    }   

    // Declaretion a constant named TypewriterText
    //:React.FC<Typewriter> defines it as a functional component in React
    const TypewriterText: React.FC<Typewriter> = ({ text, speed = 100, onComplete, showCursor = true, cursorAlwaysOn = false, className = "", }) => {
    // useState("") initializes the displayed state to an empty string
    // displayed will hold the text that is currently being shown
    // setDisplayed is the function used to update the displayed state
    const [displayed, setDisplayed] = useState("");
    // same behavior for the "Display" state but this one will hold the index of the character being typed
    const [index, setIndex] = useState(0);

    useEffect(() => { // React hook that lets you perform side effects in functional components (in this case, typing effect handled it by setTimeout)  
      if (index < text.length) {
        const timeout = setTimeout(() => { // setTimeout is used to create a delay for the typing effect
          setDisplayed((prev) => prev + text.charAt(index)); // native JavaScript string method that returns the character at a specified index.
          setIndex((prev) => prev + 1);
        }, speed);
        return () => clearTimeout(timeout); // native JavaScript function that cancels a timeout set by setTimeout()
      } else {
        if (onComplete) onComplete();
      }
    }, [index, text, speed, onComplete]); //dependencies for the effect

    const done = index === text.length; // Checks if the typing is complete

    return (
      // <span className="inline-flex items-center">
      //   <span>{displayed}</span>
      //   {showCursor && (cursorAlwaysOn || !done) && <BlinkingCursor />}
      // </span>
    <span className={`inline-flex items-center ${className}`}>
      <span>{displayed}</span>
      {showCursor && (cursorAlwaysOn || !done) && <BlinkingCursor />}
    </span>
    );
};

export default TypewriterText;