import React, { useEffect, useRef, useState } from "react";
import fb from "../../assets/BottomSection/Facebook.svg";
import twitter from "../../assets/BottomSection/Twitter.svg";
import insta from "../../assets/BottomSection/Instagram.svg";
import logo from "../../assets/BottomSection/logo-bottom.svg";

export const BottomSection = () => {
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
      className="flex flex-col items-center justify-center border-2 border-blue-500 relative"
      ref={componentRef}
      style={{ ...transitionStyles }}
    >
      <div className="flex justify-around border-2 border-[#f9d326] py-8 rounded-t-3xl rounded-b-3xl w-[78%]">
        <div className="flex flex-col gap-2 text-4xl text-left border-2 border-violet-500">
          <p className="text-white">Join Our</p>
          <p className="text-yellow-500">Community</p>
        </div>
        <div className="flex justify-center mt-4">
          <div className="mx-2 flex items-center justify-center rounded-full text-center border bg-yellow-500 w-[20] h-[20]">
            <img className="h-20 w-20" src={fb} alt="fb" />
          </div>
          <div className="mx-2 flex items-center justify-center rounded-full text-center border bg-yellow-500 w-[20] h-[20]">
            <img className="h-20 w-20" src={twitter} alt="twitter" />
          </div>
          <div className="mx-2 flex items-center justify-center rounded-full text-center border bg-yellow-500 w-[20] h-[20]">
            <img className="h-20 w-20" src={insta} alt="insta" />
          </div>
        </div>
      </div>

      <div className="my-4">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};
