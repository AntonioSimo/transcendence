"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import TitleEffect from "@/components/TitleEffect";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (containerRef.current) {
  //     gsap.fromTo( // fromTo() animates an element from its current state to a specified end state
  //       containerRef.current,
  //       { opacity: 0, scale: 0.9, y: 30 },
  //       { opacity: 1, scale: 1, y: 0, duration: 3, ease: "power2.out" }
  //     );
  //   }
  // }, []);

  return (
    <main className="flex items-center justify-center min-h-screen bg-black text-white font-terminal">
      <div ref={containerRef} className="text-4xl flex flex-col items-center gap-12">
        <TitleEffect />
      </div>
    </main>
  );
}