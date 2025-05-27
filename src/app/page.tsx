import React from 'react';
import TypingEffect from "@/components/TypingEffect";
import { gsap } from "gsap";
import "./globals.css";

import { Press_Start_2P } from 'next/font/google';

const terminal_char = Press_Start_2P({
  subsets: ['latin'], // always specify subsets
  weight: '400',
  variable: '--font-press-start-2p',
  display: 'swap',
  preload: true,
});


export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="`${terminal_char.variable} text-6xl font-bold text-white" style={{ fontFamily: terminal_char.style.fontFamily }}>
        Transcendence
        </h1>
    </div>
  );
}