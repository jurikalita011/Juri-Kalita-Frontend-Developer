import React from "react";
import { TopSection } from "../components/TopSection/TopSection";
import { MidSection } from "../components/MidSection/MidSection";
import { BottomSection } from "../components/BottomSection/BottomSection";

export const Home = () => {
  return (
    <div className="flex justify-center items-center bg-[#0E0E0E]">
      <div className="w-full">
        <TopSection />
        <MidSection />
        <BottomSection />
      </div>
    </div>
  );
};
