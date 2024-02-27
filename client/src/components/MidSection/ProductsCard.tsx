import React from "react";
import { Products } from "../../constants";

export const ProductsCard = ({ img, title, para }: Products) => {
  return (
    <div className="relative w-[314px] h-[398px] rounded-xl bg-[#141411] pt-[184px] pb-14 px-2 border-2 border-[#f9d326] flex flex-col justify-center items-center">
      <img
        src={img}
        alt="products-err"
        className="absolute top-5 left-0 right-0 mx-auto"
      />
      <div className="w-[95%] h-[158px] py-0 px-6 flex flex-col items-center gap-3 border-2 border-green-500">
        <p className="w-[83.89%] h-[24px] text-[20px] leading-6 font-bold tracking-[0.39px] text-white text-center border-2 border-red-600">
          {title}
        </p>
        <p className="w-full h-[110px] text-4 text-center leading-5 tracking-normal font-normal text-[#CFCFCF] ">
          {para}
        </p>
      </div>
    </div>
  );
};
