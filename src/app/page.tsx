"use client";

import { useEffect, useState } from "react";
import TitleEffect from "@/components/TitleEffect";
import SlideInPanel from "@/components/SlideInPanel";
import SecondPanel from "@/components/SecondPanel";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  
  // Effect to manage body overflow based on intro completion
  useEffect(() => {
    document.body.style.overflow = introDone ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [introDone]);

  return (
    <main className="font-terminal bg-black text-white">
      <section className="min-h-screen flex items-center justify-center">
        <TitleEffect onComplete={() => setIntroDone(true)} />
      </section>

      {introDone && (
        <>
          <SecondPanel />
          <SlideInPanel />
        </>
      )}
    </main>
  );
}