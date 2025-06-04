//It will be the component that will display the signup form

"use client";

import TypewriterText from "./TypewriterText";


export default function LoginForm() {
    return (
        <div className="text-4xl min-h-screen flex flex-row items-center justify-center gap-12">
            <TypewriterText
              text="SIGN UP"
              speed={100}
              showCursor={true}
              cursorAlwaysOn={true}
            />
          </div>
)}