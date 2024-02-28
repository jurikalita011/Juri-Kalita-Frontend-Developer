import React from "react";
import { NavBar } from "./NavBar";
import { TopHeading } from "./TopHeading";

export const TopSection = () => {
  return (
    <div className="h-[887px]">
      <NavBar />
      <div className="flex justify-center items-center">
        <TopHeading />
      </div>
    </div>
  );
};
