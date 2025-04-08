// src/components/ui/button.jsx
import React from "react";

export function Button({ children, className = "", variant, ...props }) {
  let baseClass =
    "rounded-2xl px-6 py-2 font-semibold transition hover:scale-105 duration-200";
  if (variant === "outline") {
    baseClass += " bg-white text-black border border-gray-300 hover:bg-gray-100";
  } else {
    baseClass += " bg-black text-white";
  }
  return (
    <button {...props} className={`${baseClass} ${className}`}>
      {children}
    </button>
  );
}
