import React from "react";
import MainBanner from "./images/main_banner.png";
import logo from "../components/Video/public.gif"
import BG1 from "../components/Video/Pearl_Texture_2.mp4"
function Hero() {
  return (
    <div className="">
      <div>
        <div className="banner-section video-dovker" >
        <div className="video-docker fixed left-0 top-0 h-[400px] w-full overflow-hidden">
        <video
          className="absolute min-h-full min-w-full object-cover"
          src={BG1}
          type="video/webm"
          autoPlay
          muted
          loop
        >

        </video>
      </div>
        </div>
        <div className="logo">
          <a href="https://dwope.works/DWOOBz" rel="noreferrer"><img className="h-20 relative left-6 top-6" src={logo} alt="logo" /></a>
            
        </div>
        <div className="text_box relative w-[100%] flex flex-col items-center gap-4">
          <h1 className="font-twister text-[40px] font-bold title animate-title ">superWeaves</h1>
          <h1 className="font-superLagend text-4xl text tracking-widest">Trade, Bet & Game </h1>
          <h1 className="font-twister text-4xl bg-gradient-to-r from-[#f32f32] via-[#f46b59] to-[#f0e68d] text-transparent bg-clip-text">In One Web3 MMO Super APP</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
