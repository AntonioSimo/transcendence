'use client';  // execution on client side

import { useEffect, useState } from "react";

interface Typewriter {
    text: string;
    speed?: number;
  }

const TypewriterText: React.FC<Typewriter> = ({ text, speed = 100 }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayed}</span>;
};

export default TypewriterText;