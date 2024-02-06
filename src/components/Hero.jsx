import React from "react";
import MainBanner from "./images/main_banner.png";
import logo from "../components/Video/public.gif";
import BG1 from "../components/Video/Pearl_Texture_2.mp4";
function Hero() {
  return (
    <div className="max-w-[1200px] mx-auto flex w-full h-full overflow-hidden">
      
      <div className="">
        <div className="banner-section">
          <div className="-z-10 absolute left-0 top-0 h-full w-full overflow-hidden">
            <video
              className="absolute min-h-full min-w-full object-cover"
              src={BG1}
              type="video/webm"
              autoPlay
              muted
              loop
            ></video>
          </div>
          
        </div>

      
        <div className="logo relative">
          <a href="https://dwope.works/DWOOBz" rel="noreferrer">
            <img className="h-20 relative left-6 top-6" src={logo} alt="logo" />
            <div className="flex flex-col mt-60 gap-4 items-center">
                      <h1 className="font-twister text-[60px] font-bold title animate-title ">
                    superWeaves
                    </h1>
                    <h1 className="font-superLagend text-[3.2rem] text tracking-widest">
                      Trade, Bet & Game{" "}
                    </h1>
                    <h1 className="font-twister text-[3.2rem] bg-gradient-to-r from-[#f32f32] via-[#f46b59] to-[#f0e68d] text-transparent bg-clip-text">
                      In One Web3 MMO Super APP
                    </h1>
            </div>
          </a>

          <div className="text_box w-[100%] bg-red-300 middle-text flex flex-col items-center gap-4">
          
        </div>
        </div>


        


      </div>
    </div>
  );
}

export default Hero;
