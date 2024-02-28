import React from "react";
import seven from "../../assets/Animation/seven.svg";
import { TopHeading } from "./TopHeading";

export const TopSection = () => {
  return (
    <div className="h-[727px] relative">
      <div className="flex justify-center items-center">
        <TopHeading />
      </div>
      <img
        className="floating-seven absolute top--2 transform -translate-y-1/2 right-3"
        src={seven}
        alt="seven"
      />
    </div>
  );
};
