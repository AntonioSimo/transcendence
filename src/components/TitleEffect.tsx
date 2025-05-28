'use client';  // execution on client side

import { useEffect, useState } from "react";
import BlinkingCursor from "./Cursor";

// Definition of the Typewriter component props
interface Typewriter {
    text: string; //text that will be displayed
    speed?: number; // speed of the typing effect in milliseconds
    onComplete?: () => void; // callback function when the typing is complete
    showCursor?: boolean; // whether to show the blinking cursor
    cursorAlwaysOn?: boolean; // whether the cursor should always be visible
  }

// Declaretion a constant named TypewriterText
//:React.FC<Typewriter> defines it as a functional component in React
const TypewriterText: React.FC<Typewriter> = ({ text, speed = 100, onComplete, showCursor = true, cursorAlwaysOn = false,}) =>   {
  
  // useState("") initializes the displayed state to an empty string
  // displayed will hold the text that is currently being shown
  // setDisplayed is the function used to update the displayed state
  const [displayed, setDisplayed] = useState("");

  // same behavior for the "Display" state but this one will hold the index of the character being typed
  const [index, setIndex] = useState(0);

  useEffect(() => { // React hook that lets you perform side effects in functional components (in this case, typing effect handled it by setTimeout)
    if (index < text.length) {
      const timeout = setTimeout(() => { // setTimeout is used to create a delay for the typing effect
        setDisplayed(prev => prev + text.charAt(index)); // native JavaScript string method that returns the character at a specified index.
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout); // native JavaScript function that cancels a timeout set by setTimeout()
    } else if (onComplete) {
      onComplete();
    }
  }, [index, text, speed, onComplete]); //dependencies for the effect

  const done = index === text.length; // Checks if the typing is complete

  // Render the component and Displays the current text (displayed) inside a span
  return (
    <span className="inline-flex items-center">
      <span>{displayed}</span>
      {showCursor && (cursorAlwaysOn || !done) && <BlinkingCursor />} {/*Displays a blinking cursor component if certain props/state are true*/}
      </span>
  );
};

// Main component that uses the TypewriterText component to create a title effect
export default function TitleEffect() {
  const [showSecond, setShowSecond] = useState(false); // State to control the visibility of the second line

  return (
    <div className="text-4xl min-h-screen flex flex-col items-center justify-center gap-12">
      <TypewriterText
        text="Transcendence"
        speed={100}
        onComplete={() => setShowSecond(true)}
        showCursor={!showSecond} // Cursor active only on the first line
      />
      {showSecond && (
        <TypewriterText
          text="scroll down to getting started"
          speed={50}
          showCursor={true} // Cursor active on the second line
          cursorAlwaysOn={true}
        />
      )}
    </div>
  );
}
