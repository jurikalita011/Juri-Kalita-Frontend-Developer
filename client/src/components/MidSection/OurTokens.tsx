import React, { useEffect, useRef, useState } from "react";
import oval from "../../assets/Animation/oval.svg";
import { Token } from "../../constants";
import { TokenCard } from "./TokenCard";

export const OurTokens: React.FC = () => {
  const [tokensData, setTokensData] = useState<Token[]>([]);
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(0);

  const componentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const getTokens = async () => {
    try {
      let res = await fetch(
        `https://bituniverse-api-template.onrender.com/tokens?page=${page}&limit=6`
      );
      let data = await res.json();
      console.log("Fetched data:", data);
      setTokensData(data.data);
      setLastPage(Math.ceil(data.data.length / 6));
    } catch (error) {
      console.log(error);
    }
  };

  console.log(tokensData, tokensData.length);

  const handlePrevButton = () => {
    setPage((prev) => prev - 1);
  };

  const handleNextButton = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    getTokens();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        const isInView =
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2;
        setIsVisible(isInView);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const transitionStyles = {
    transition: "opacity 0.5s ease-in-out",
    opacity: isVisible ? 1 : 0,
  };

  return (
    <div
      className="w-full h-[1400px] pt-[60px] px-0 my-[60px] relative"
      ref={componentRef}
      style={{ ...transitionStyles }}
    >
      <img
        src={oval}
        alt="oval"
        className="floating-oval absolute bottom-0 transform -translate-y-1/2 left-1"
      />
      <div className="w-full h-[135px] px-30 py-0 flex flex-col justify-center items-center gap-6 ">
        <div className="w-[25%] h-[77.02px] p-2 flex items-center justify-center">
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
      <div className="flex flex-col gap-[20px] m-[50px]">
        <div>
          <div className="text-4xl flex justify-center m-[20px]">
            Our <span className="text-main-yellow">Tokens</span>
          </div>
          <div className="flex justify-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            hic nobis ducimus magnam placeat aperiam error. Laborum, culpa.
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[85%]">
            <div className="grid grid-cols-3 gap-12">
              {tokensData?.map((token, ind) => (
                <TokenCard key={ind} {...token} />
              ))}
            </div>
            <div className="flex w-full justify-evenly mt-10">
              <div className="shadow-xl">
                <button
                  className="cursor-pointer text-black bg-white rounded-md py-2 px-6 w-[100px]"
                  onClick={handlePrevButton}
                  disabled={page === 1}
                >
                  Previous
                </button>
              </div>
              <span className="text-white">
                Page {page} of {lastPage}
              </span>
              <div className="shadow-xl">
                <button
                  className="cursor-pointer text-black bg-white rounded-md py-2 px-6 w-[100px]"
                  onClick={handleNextButton}
                  disabled={page === lastPage}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
