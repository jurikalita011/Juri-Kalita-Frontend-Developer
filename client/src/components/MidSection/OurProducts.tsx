import React from "react";
import { Products } from "../../constants";
import bMarket from "../../assets/MidSection/OurProducts/bMarket.svg";
import bDex from "../../assets/MidSection/OurProducts/bDex.svg";
import bBridge from "../../assets/MidSection/OurProducts/bBridge.svg";
import bPad from "../../assets/MidSection/OurProducts/bPad.svg";
import bLend from "../../assets/MidSection/OurProducts/bLend.svg";
import { ProductsCard } from "./ProductsCard";

export const OurProducts = () => {
  const productsData: Products[] = [
    {
      img: bMarket,
      title: "Bita Marketplace",
      para: "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada ",
    },
    {
      img: bDex,
      title: "Bitadex",
      para: "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada ",
    },
    {
      img: bBridge,
      title: "Bitabridge",
      para: "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada ",
    },
    {
      img: bPad,
      title: "Bitapad",
      para: "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada ",
    },
    {
      img: bLend,
      title: "BitaLend",
      para: "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada ",
    },
  ];
  return (
    <>
      <div className="w-full h-[135px] px-30 py-0 flex flex-col justify-center items-center gap-6">
        <div className="w-[28%] h-[77.02px] p-2 gap-2 flex items-center justify-center">
          <p className="w-[95.4%] h-[60px] font-[Kanit] text-[56px] font-semibold leading-[60px] tracking-normal text-center text-white">
            Our{" "}
            <span className="font-[Clash Display] text-[56px] leading-[60px] tracking-normal text-center text-[#FECC00]">
              Products
            </span>
          </p>
        </div>
        <p className="w-[85.71%] h-8 font-[Inter] text-5 font-normal leading-8 tracking-normal text-center text-white">
          Pellentesque habitant morbi tristique senectus et netus et
          Pellentesque habitant morbi.
        </p>
      </div>
      <div className="w-full flex justify-center items-center my-8">
        <div className="w-[80%] py-0 px-16">
          <div className="grid grid-cols-3 gap-12 justify-self-center">
            {productsData?.map((product, ind) => (
              <ProductsCard {...product} key={ind} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
