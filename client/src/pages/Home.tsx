import React from "react";
import { TopSection } from "../components/TopSection/TopSection";
import { MidSection } from "../components/MidSection/MidSection";

export const Home = () => {
  return (
    <div className="flex justify-center items-center bg-[#0E0E0E]">
      <div className="w-full border-2 border-red-500">
        <TopSection />
        <MidSection />
      </div>
    </div>
  );
};
