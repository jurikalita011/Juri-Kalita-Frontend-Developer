import React from "react";
import fb from "../../assets/BottomSection/Facebook.svg";
import twitter from "../../assets/BottomSection/Twitter.svg";
import insta from "../../assets/BottomSection/Instagram.svg";
import logo from "../../assets/TopSection/logo.svg";

export const BottomSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-around mx-10 border-2 border-[#f9d326] p-4 rounded-md w-[78%]">
        <div className="flex flex-col gap-2 text-4xl text-center">
          <p className="text-white">Join Our</p>
          <p className="text-yellow-500">Community</p>
        </div>
        <div className="flex justify-center mt-4">
          <div className="mx-2 flex items-center justify-center rounded-full text-center border bg-yellow-500 w-[40px] h-[40px]">
            <img className="h-20 w-20" src={fb} />
          </div>
          <div className="mx-2 flex items-center justify-center rounded-full text-center border bg-yellow-500 w-[40px] h-[40px]">
            <img className="h-20 w-20" src={twitter} />
          </div>
          <div className="mx-2 flex items-center justify-center rounded-full text-center border bg-yellow-500 w-[40px] h-[40px]">
            <img className="h-20 w-20" src={insta} />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <img src={logo} alt="" className="h-[198px] w-[198px]" />
        <p className="text-white pb-5">All rights reserved</p>
      </div>
    </div>
  );
};
