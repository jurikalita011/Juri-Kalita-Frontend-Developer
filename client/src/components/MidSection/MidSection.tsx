import React from "react";
import { OurProducts } from "./OurProducts";
import { OurTokens } from "./OurTokens";

export const MidSection = () => {
  return (
    <div className="w-full h-[3359px] border-2 border-yellow-500">
      <OurProducts />
      <OurTokens />
    </div>
  );
};
