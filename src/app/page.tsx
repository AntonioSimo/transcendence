import React from 'react';
import TypewriterText from "@/components/TitleEffect";
import { gsap } from "gsap";
import "./globals.css";

export default function Home() {
  return (
    <div className={`text-4xl min-h-screen flex flex-col items-center justify-center gap-10`}>
      <TypewriterText text="Transcendence" />
      <TypewriterText text="scroll down to getting started" />
    </div>
  );
}