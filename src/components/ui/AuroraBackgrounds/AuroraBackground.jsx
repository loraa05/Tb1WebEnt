// components/ui/AuroraBackgrounds/AuroraBackground.jsx
import React from "react";

export const AuroraBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Layer 1: Blue-Pink Shimmer */}
      <div className="absolute w-[150%] h-[150%] bg-gradient-to-r from-blue-300 via-white to-pink-400 
        opacity-40 blur-3xl animate-auroraOne rounded-full left-[-30%] top-[-20%]" />

      {/* Layer 2: Purple-Green Swirl */}
      <div className="absolute w-[140%] h-[140%] bg-gradient-to-tr from-fuchsia-300 via-white to-green-300 
        opacity-30 blur-3xl animate-auroraTwo rounded-full right-[-25%] top-[10%]" />

      {/* Layer 3: Yellow-Teal Flow */}
      <div className="absolute w-[160%] h-[160%] bg-gradient-to-r from-yellow-200 via-white to-teal-300 
        opacity-20 blur-3xl animate-auroraThree rounded-full left-[10%] bottom-[-30%]" />
    </div>
  );
};
