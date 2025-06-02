"use client";

import TitleEffect from "@/components/TitleEffect";
import SlideInPanel from "@/components/SlideInPanel";

export default function Home() {
  return (
    <main className="font-terminal bg-black text-white">
      {/* Sezione iniziale con animazione */}
      <section className="min-h-screen flex items-center justify-center">
        <TitleEffect />
      </section>

      {/* Pannelli statici colorati */}
      <SlideInPanel />
    </main>
  );
}
