"use client";

import { useSearchParams } from "next/navigation";
import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";

export default function AuthPage() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode"); // "login" o "signup"

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      {mode === "signup" ? <SignupForm /> : <LoginForm />}
    </main>
  );
}