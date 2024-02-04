import React from "react";
import MainBanner from "./images/main_banner.png";
import logo from "./images/logo.png"

function Hero() {
  return (
    <div className="">
      <div>
        <div className="banner-section" >
            <img className="banner opacity-70" src={MainBanner} alt="" />
        </div>
        <div className="logo">
            <img className="h-20 relative left-6 top-6" src={logo} alt="" />
        </div>
        <div className="text_box w-[100%] flex flex-col items-center gap-4">
          <h1 className="font-twister text-[40px] font-bold title ">superWeaves</h1>
          <h1 className="font-superLagend text-4xl text tracking-widest">Trade, Bet & Game </h1>
          <h1 className="font-twister text-4xl bg-gradient-to-r from-[#f32f32] via-[#f46b59] to-[#f0e68d] text-transparent bg-clip-text">In One Web3 MMO Super APP</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
