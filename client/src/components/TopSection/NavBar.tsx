import React from "react";
import logo from "../../assets/TopSection/logo.svg";

export const NavBar = () => {
  return (
    <div className="flex justify-center items-center m-[40px]">
      <div
        className="w-full h-[88px] flex justify-between items-center border  rounded-2xl border-[rgba(53, 31, 31, 0.31)]
       px-8 py-4 bg-[#342F0E]"
      >
        <img
          className="w-[12.11%] h-14 border-2 border-red-500"
          src={logo}
          alt="no-logo"
        />
        <div className="w-[61%] flex items-center justify-between border-2 border-black">
          <div className="w-[72.37%] h-[48.5px] flex items-center justify-center gap-2 border-2 border-cyan">
            <div className="w-[17.6%] h-[48.5px] pt-[15px] pr-[24.2px] pb-[16.5px] pl-6 rounded-2xl flex items-center justify-center gap-[10.55px] border-2 border-blue-600">
              <p className="h-[17px] w-full font-[Inter] text-[18px] font-medium leading-[17px] tracking-normal text-left text-white">
                About
              </p>
            </div>
            <div className="w-[28.2%] h-[48.5px] pt-[15px] pr-[24.2px] pb-[16.5px] pl-6 rounded-2xl flex items-center justify-center gap-[10.55px] border-2 border-blue-600">
              <p className="h-[17px]  font-[Inter] text-[18px] font-medium leading-[17px] tracking-normal text-left text-white border-2 border-red-600">
                Our Products
              </p>
            </div>
            <div className="w-[27.22%] h-[48.5px] pt-[15px] pr-[24.2px] pb-[16.5px] pl-6 rounded-2xl flex items-center justify-center gap-[10.55px] border-2 border-blue-600">
              <p className="h-[17px] font-[Inter] text-[18px] font-medium leading-[17px] tracking-normal text-left text-white border-2 border-red-600">
                Token Utility
              </p>
            </div>
            <div className="w-[22.69%] h-[48.5px] pt-[15px] pr-[24.2px] pb-[16.5px] pl-6 rounded-2xl flex items-center justify-center gap-[10.55px] border-2 border-blue-600">
              <p className="h-[17px] font-[Inter] text-[18px] font-medium leading-[17px] tracking-normal text-left text-white border-2 border-red-600">
                Roadmap
              </p>
            </div>
          </div>
          <div className="w-[23.58%] h-[55px] flex items-center justify-center border-2 border-pink-600 rounded-[10px] bg-[#F9D326]">
            <p className="w-[70.05%] h-[17px] text-center">Connect Wallet</p>
          </div>
        </div>
      </div>
    </div>
  );
};
