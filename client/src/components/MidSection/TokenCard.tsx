import React from "react";
import { Token } from "../../constants";
import rightArrow from "../../assets/TopSection/rightArrow.svg";

export const TokenCard = ({
  img,
  symbol,
  tokenName,
  decimals,
  marketcap,
  chain,
}: Token) => {
  return (
    <div className="flex flex-col justify-center text-left w-[300px] h-[398px] items-center border-2 border-[#f9d326] rounded-[10px] gap-y-[10px]">
      <img src={img} alt="" width={"100px"} />
      <h2 className="text-2xl border-b-2 w-[200px] text-center text-white">
        Bitcoin
      </h2>
      <div className="w-[60%] flex justify-between">
        <p className="text-[#CFCFCF] text-left">Symbol</p>
        <p className="text-[#CFCFCF] text-left">{symbol}</p>
      </div>
      <div className="w-[60%] flex justify-between">
        <p className="text-[#CFCFCF]">Decimals</p>
        <p className="text-[#CFCFCF]">{decimals}</p>
      </div>
      <div className="w-[60%] flex justify-between">
        <p className="text-[#CFCFCF]">Market Cap</p>
        <p className="text-[#CFCFCF]">{marketcap}</p>
      </div>
      <div className="w-[60%] flex justify-between">
        <p className="text-[#CFCFCF]">Chain</p>
        <p className="text-[#CFCFCF]">{chain}</p>
      </div>
      <button className="w-[40%] h-[px] rounded-2xl mt-8">
        <div className="w-[95.4%] h-[47px] border-2 border-white rounded-2xl flex justify-center items-center gap-1 pt-[10px] pr-5 pb-[10px] pl-6 bg-gradient-to-r from-[#FECC00] to-[#FEA800]">
          <p className=" w-[100%] font-[Inter] text-left text-4 leading-7 tracking-normal text-[#FFFFFF]">
            Details
          </p>
          <div className="w-6 h-6 flex justify-center items-center">
            {" "}
            <img src={rightArrow} alt="arrow" />
          </div>
        </div>
      </button>
    </div>
  );
};
