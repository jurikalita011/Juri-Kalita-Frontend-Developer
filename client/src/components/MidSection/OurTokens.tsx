import React from "react";

export const OurTokens = () => {
  return (
    <div className="w-full h-[1454px] py-[60px] px-0 my-[60px] border-2 border-cyan-500">
      <div className="w-full h-[135px] px-30 py-0 flex flex-col justify-center items-center gap-6 border-2 border-pink-500">
        <div className="w-[25%] h-[77.02px] p-2 flex items-center justify-center border-2 border-green-500">
          <p className="w-[95.4%] h-[60px] font-[Kanit] text-[56px] font-semibold leading-[60px] tracking-normal text-center text-white">
            Our{" "}
            <span className="font-[Clash Display] text-[56px] leading-[60px] tracking-normal text-center text-[#FECC00]">
              Tokens
            </span>
          </p>
        </div>
        <p className="w-[85.71%] h-8 font-[Inter] text-5 font-normal leading-8 tracking-normal text-center text-white">
          Pellentesque habitant morbi tristique senectus et netus et
          Pellentesque habitant morbi.
        </p>
      </div>
    </div>
  );
};
