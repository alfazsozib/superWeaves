import React from "react";
import MainBanner from "./images/main_banner.png";
import logo from "../components/Video/public.gif";
import BG1 from "../components/Video/Pearl_Texture_2.mp4";
// import { Link } from "react-router-dom";


function Hero() {
  return (
    <div className="max-w-[1200px] mx-auto flex w-full h-[100vh] overflow-hidden">
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

        <div className="logo relative z-[10]">
          <a href="https://dwope.works/DWOOBz" rel="noreferrer">
            <img className="h-20 relative left-6 top-6" src={logo} alt="logo" />
            <div className="flex flex-col mt-60 gap-4 items-center ml-[100px] max-sm:ml-0">
            
            
            <div className="min-w-[412px] mx-auto max-sm:mx-0 md:mx-0 relative flex text-center items-center justify-center font-twist text-5xl tracking-tighter ">
            <div>
              <h1 className="linear-wipe font-twister max-sm:text-4xl text-5xl text-transparent  md:text-6xl">
                SupperWaves
              </h1>
            </div>
            <div className="absolute bottom-1 left-1 max-sm:left-10 max-sm:text-4xl md:text-6xl">
              <h1 className="font-twister text-[#E4E4E4]">SupperWaves</h1>
            </div>
          </div>

              <h1 className="font-superLagend text-[3.2rem] max-sm:text-2xl text tracking-widest">
                Trade, Bet & Game{" "}
              </h1>
              <h1 className="font-twister text-[3.2rem] max-sm:text-[1.2rem] linear-sub text-transparent bg-clip-text">
                In One Web3 MMO Super APP
              </h1>
            </div>
          </a>

          <div className="text_box w-[100%] bg-red-300 middle-text flex flex-col items-center gap-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
