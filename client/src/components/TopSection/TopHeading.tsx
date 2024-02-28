import React, { useEffect, useRef, useState } from "react";
import house from "../../assets/Animation/house.svg";
import rightArrow from "../../assets/TopSection/rightArrow.svg";

export const TopHeading = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

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
      className="w-[72.36%] h-[580px] flex flex-col items-center justify-center"
      ref={componentRef}
      style={{ ...transitionStyles }}
    >
      <div className="w-[89.63%] flex items-center justify-center border-2 border-red-500">
        <div className="w-[82%] h-[403px] flex justify-center flex-col border-2 relative border-yellow-500">
          <div className={isVisible ? "text-move" : ""}>
            <p className="text-[#F0F6FB] text-left font-semibold text-[100px] leading-[144px]">
              Your Gateway
            </p>
            <p className="text-[#F0F6FB] text-left font-semibold text-[100px] leading-[144px]">
              To
            </p>
          </div>
          <p
            className={
              isVisible
                ? "text-move-2 text-[#F0F6FB] text-left font-semibold text-[100px] leading-[144px]"
                : ""
            }
          >
            DEFI ON <span className="text-[#FECC00] text-[100px]">BITCOIN</span>
          </p>
        </div>
        <img
          src={house}
          alt="house"
          className={isVisible ? "img-move absolute" : ""}
        />
      </div>
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
