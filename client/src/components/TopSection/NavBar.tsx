import React from "react";
import logo from "../../assets/TopSection/logo.svg";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { arbitrum, mainnet } from "wagmi/chains";
import { QueryClient } from "@tanstack/react-query";

//wallet connection
const queryClient = new QueryClient();

const projectId = "90942699b33a7c47b09a4d1dd26ea59a";

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum] as const;
const config = defaultWagmiConfig({
  chains, // required
  projectId, // required
  metadata, // required
  enableWalletConnect: true, // Optional - true by default
  enableInjected: true, // Optional - true by default
  enableEIP6963: true, // Optional - true by default
  enableCoinbase: true, // Optional - true by default
  // Any additional options can be provided here
});

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional
});

export const NavBar = () => {
  const { open } = useWeb3Modal();
  return (
    <div className="flex justify-center items-center m-[40px]">
      <div
        className="w-full h-[88px] flex justify-between items-center border  rounded-2xl border-[rgba(53, 31, 31, 0.31)]
       px-8 py-4 bg-[#342F0E]"
      >
        <img className="w-[12.11%] h-14 " src={logo} alt="no-logo" />
        <div className="w-[61%] flex items-center justify-between">
          <div className="w-[72.37%] h-[48.5px] flex items-center justify-center gap-2">
            <div className="w-[17.6%] h-[48.5px] pt-[15px] pr-[24.2px] pb-[16.5px] pl-6 rounded-2xl flex items-center justify-center gap-[10.55px]">
              <p className="h-[17px] w-full font-[Inter] text-[18px] font-medium leading-[17px] tracking-normal text-left text-white">
                About
              </p>
            </div>
            <div className="w-[28.2%] h-[48.5px] pt-[15px] pr-[24.2px] pb-[16.5px] pl-6 rounded-2xl flex items-center justify-center gap-[10.55px]">
              <p className="h-[17px]  font-[Inter] text-[18px] font-medium leading-[17px] tracking-normal text-left text-white">
                Our Products
              </p>
            </div>
            <div className="w-[27.22%] h-[48.5px] pt-[15px] pr-[24.2px] pb-[16.5px] pl-6 rounded-2xl flex items-center justify-center gap-[10.55px]">
              <p className="h-[17px] font-[Inter] text-[18px] font-medium leading-[17px] tracking-normal text-left text-white ">
                Token Utility
              </p>
            </div>
            <div className="w-[22.69%] h-[48.5px] pt-[15px] pr-[24.2px] pb-[16.5px] pl-6 rounded-2xl flex items-center justify-center gap-[10.55px]">
              <p className="h-[17px] font-[Inter] text-[18px] font-medium leading-[17px] tracking-normal text-left text-white ">
                Roadmap
              </p>
            </div>
          </div>
          <button
            onClick={() => open()}
            className="w-[23.58%] h-[55px] flex items-center justify-center rounded-[10px] bg-[#F9D326]"
          >
            <p className="w-[70.05%] h-[17px] font-medium text-center">
              Connect Wallet
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
