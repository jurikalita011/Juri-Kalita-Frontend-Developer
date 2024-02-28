// Home.js
import React from "react";
import { TopSection } from "../components/TopSection/TopSection";
import { MidSection } from "../components/MidSection/MidSection";
import { BottomSection } from "../components/BottomSection/BottomSection";
import { NavBar } from "../components/TopSection/NavBar";
import cube from "../assets/Animation/cubeTop.svg";

export const Home = () => {
  return (
    <div className="flex justify-center items-center bg-[#0E0E0E] relative">
      <img
        className="floating-cube absolute top-20 left-0"
        src={cube}
        alt="cube"
      />

      <div className="w-full relative">
        <NavBar />

        <TopSection />

        <MidSection />

        <BottomSection />
      </div>
    </div>
  );
};
