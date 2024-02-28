import React from "react";
import { OurProducts } from "./OurProducts";
import { OurTokens } from "./OurTokens";

export const MidSection = () => {
  return (
    <div className="w-full h-[2500px] border-2 border-red-600 relative">
      <OurProducts />

      <OurTokens />
    </div>
  );
};
