"use client";

import { useState } from "react";
import TypewriterText from "./TypewriterText";

export default function LoginForm() {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center font-terminal px-4">
      
      {step >= 0 && (
        <div className="text-5xl md:text-6xl font-bold mb-4 text-center">
          <TypewriterText text="TRANSCENDENCE" speed={100} onComplete={() => setStep(1)} />
        </div>
      )}

      {step >= 1 && (
        <div className="mb-8 text-2xl">
          <TypewriterText text="LOG IN" speed={100} onComplete={() => setStep(2)} />
        </div>
      )}

      <div className="w-full max-w-md">
        <div className="border-t-4 border-white" />

        <form
          onSubmit={handleSubmit}
          className="border-x-4 border-dashed border-white p-8 space-y-6 bg-black"
        >
          {step >= 2 && (
            <>
              <TypewriterText text="EMAIL" speed={100} onComplete={() => setStep(3)}/>
              <input
                type="email"
                className="w-full mt-2 p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </>
          )}

          {step >= 3 && (
            <>
              <TypewriterText text="PASSWORD" speed={100} onComplete={() => setStep(4)} />
              <input
                type="password"
                className="w-full mt-2 p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </>
          )}

          {step >= 4 && (
            <button
            type="submit"
            className="w-full py-2 px-4 bg-white hover:bg-gray-300 text-black font-bold rounded"
          >
            <TypewriterText text="LOG IN" speed={100} />
          </button>
          )}
        </form>

        <div className="border-b-4 border-white" />
      </div>
    </div>
  );
}

