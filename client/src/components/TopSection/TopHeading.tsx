import React from "react";
import topImg from "../../assets/TopSection/top.svg";
import rightArrow from "../../assets/TopSection/rightArrow.svg";
export const TopHeading = () => {
  return (
    <div className="w-[72.36%] h-[580px] flex flex-col items-center justify-center ">
      <img className="w-[89.63%] h-[403px]" src={topImg} alt="houseImg" />
      <div className="w-[91.63%] h-[175px]">
        <p className="my-6 w-full h-10 font-Inter text-[24px] leading-10 font-normal text-center tracking-normal text-[#FDFFE3] ">
          Lorem ipsum dolor sit amet consectetur. Porta amet tellus suspendisse
          id velit proin eleifend id mauris. Amet sem in id eget nunc quam lacus
          tellus augue.
        </p>
        <button className="w-[18%] h-[55px] rounded-2xl mt-8">
          <div className="w-[95.4%] h-[47px] border-2 border-white rounded-2xl flex justify-center items-center gap-1 pt-[10px] pr-5 pb-[10px] pl-6 bg-gradient-to-r from-[#FECC00] to-[#FEA800]">
            <p className=" w-[100%] font-[Inter] text-left text-4 leading-7 tracking-normal text-[#FFFFFF]">
              Get Started
            </p>
            <div className="w-6 h-6 flex justify-center items-center">
              {" "}
              <img src={rightArrow} alt="arrow" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
