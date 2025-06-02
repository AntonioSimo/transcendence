"use client";

export default function SlideInPanel() {
    const colors = ["#3498db", "#2ecc71", "#e74c3c", "#9b59b6"];

  return (
    <div className="w-full">
      {colors.map((color, index) => (
        <div
          key={index}
          className="flex items-center justify-center h-screen text-5xl font-bold text-white"
          style={{ backgroundColor: color }}
        >
          Slide {index + 1}
        </div>
      ))}
    </div>
  );
}
