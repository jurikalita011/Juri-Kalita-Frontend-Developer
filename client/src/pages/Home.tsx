import React from "react";
import { TopSection } from "../components/TopSection/TopSection";
import { MidSection } from "../components/MidSection/MidSection";
import { BottomSection } from "../components/BottomSection/BottomSection";
import { NavBar } from "../components/TopSection/NavBar";

export const Home = () => {
  return (
    <div className="flex justify-center items-center bg-[#0E0E0E]">
      <div className="w-full">
        <NavBar />
        <TopSection />
        <MidSection />
        <BottomSection />
      </div>
    </div>
  );
};
