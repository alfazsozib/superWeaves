import React from "react";
import bgShadow from "../components/images/shadow2.png";
import pinkBg from "../components/bg/Ellipse 4.png";
import ellips from "../components/bg/Ellipse 30.png";
import pinkBG from "../components/bg/pinkbg.png";
import pinkBlue from "../components/bg/pinkBlue.png";
import yellowBG from "../components/bg/yellowbg.png";
import polygon from "../components/bg/Polygon 3.png";
import bgShadow2 from "../components/images/shadow1.png";
import bgShadow3 from "../components/images/shadow3.png";
import mid_banner from "../components/images/mid_banner.jpeg";
import banner from "../components/Video/Pearl_Texture_2.mp4";
import mid_banner2 from "../components/images/mid_banner2.jpeg";
import blankCard from "../components/images/Card.png";
import { Cards } from "./data/Cards";
import Footer from "./global/Footer";
import Faq from "./Faq";
import { Model } from "./Model";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { cardData } from "./data/Models";

import Meta from "./Meta";
import Banner from "./Banner";
import Hero from "../components/Hero";

function ThirdSection() {
  return (
    <>
      {/* <div clas></div> */}
      <div className="max-w-[1200px]  mx-auto">
        <div className="p-12 max-sm:p-8 mt-28 max-sm:mt-0 lg:flex">
          <div className="">
            <h1 className="font-superLagend z-10 text-2 text-3xl max-sm:text-2xl">
              Play, Connect, Conquer
            </h1>
            <p className="text-lg text-[#333333] max-sm:text-xl max-sm:w-full lg:text-justify  mt-8 max-sm:mt-8 font-superLagend max-sm:leading-relaxed leading-loose">
              The gaming experience in SuperWeaves is a place where players can
              trade, sell, or purchase NFT assets directly without
              intermediaries. Customize your decks with a mix of RNG and
              strategy, and enjoy a fun Multiplayer Trading Card Game
              experience, a first of its kind.
            </p>
          </div>
          <div>
            <img
              className="w-[85rem] opacity-30 max-sm:-z-[10] max-sm:opacity-30 top-[-8rem] right-[80rem] relative"
              src={bgShadow}
              alt=""
            />
          </div>
        </div>
        
      </div>

      <div className="card-line flex items-center w-full max-w-[1880px] mx-auto">
          <div>
            <div className="polygon absolute right-96">
              {/* <img className="mr-60" src={pinkBlue} alt="" /> */}
            </div>
            <div className="cards relative flex max-sm:bottom-[200px] max-sm:top-[-20rem]">
              <div className="lg:flex md:flex  max-sm:p-4 max-sm:
              grid max-sm:grid-cols-2 gap-[10px]">
                {cardData.map((id, index) => (
                  <div className="card w-[300px] max-sm:w-[200px] max-sm:pr-8">
                    <img className="" src={id.image} alt="" />
                  </div>
                  // <Canvas
                  //   style={{ height: "320px", width: "200px" }}
                  //   camera={{
                  //     fov: 64,
                  //     getViewBounds: 50,
                  //     position: [-2, 2, 0],
                  //   }}
                  // >
                  //   <ambientLight intensity={5} />
                  //   <OrbitControls enableZoom={true} />
                  //   <Model path={id.path} />
                  // </Canvas>
                ))}
              </div>
            </div>
          </div>
        </div>
      
      <div className="trade-sec relative">
      <div className="lg:flex md:flex max-w-[1200px] mx-auto">
        <div className="max-w-[1200px] mx-auto w-full text-left absolute max-sm:relative top-16 max-sm:top-[-140px] flex">
        <div className="overflow-hidden">
          <img className="w-96 absolute left-[64rem] overflow-hidden opacity-30 max-sm:z-0 max-sm:w-56 max-sm:absolute max-sm:top-[5rem] max-sm:left-[-6rem]" src={bgShadow2} alt="" />
        </div>
          <p className="font-superLagend lg:relative max-sm:top-4 max-sm:left-[-2rem] lg:left-[4rem] text-[#333333] lg:mt-28 max-sm:mt-[-8rem]  max-sm:text-left text-left max-sm:p-6 w-[800px] max-sm:z-30 max-sm:w-full max-sm:font-normal max-sm:leading-relaxed text-lg max-sm:text-lg leading-loose">
            Harness the power of the LUKSO blockchain's groundbreaking LSPs to
            engage in secure, and truly decentralized transactions that affirm
            your true ownership of digital assets.
          </p>
        
        {/* <div className="absolute">
          <img className="w-80  right-[-20rem] opacity-30 max-sm:z-0 max-sm:w-56 max-sm:absolute max-sm:top-[20rem] max-sm:left-60" src={bgShadow2} alt="" />
        </div> */}
          
        </div>
        
      </div>
       
        <div className="absolute max-sm:z-[-1] right-10 max-sm:right-30 max-sm:top-60">
          {/* <img className="" width={900} src={pinkBG} alt="" /> */}
        </div>
        <div className="relative max-sm:p-4 w-[100%]  top-[425px] max-sm:top-[-60px]">
          
          <span className="text-2 md:ml-[500px] max-sm:text-2xl max-sm:p-4 text-4xl  font-superLagend flex">
            Strategize, Trade, Thrive
          </span>

          <div className="banner-second  mt-8">
            {/* <div className="-z-10 left-0 top-0 h-[400px] w-full overflow-hidden">
              <video
                className=" min-h-full min-w-full object-cover"
                src={banner}
                type="video/webm"
                autoPlay
                muted
                loop
              ></video>
            </div> */}

            <div className="text-area pt-6  text-[#333333] p-16 max-sm:p-4  max-w-[1200px] mx-auto ">
              <p className="font-superLagend text-lg max-sm:text-xl leading-loose max-sm:leading-relaxed">
                Our tradebot is your trusted companion, navigating you through
                the complexities of multiple blockchains with ease and agility.
                Adapt and thrive with DWØPE's customizable trading strategies,
                designed to align with your personal risk profile and market
                predictions.
              </p>
              <br />
              <br />

              <p className="font-superLagend text-[#333333] text-lg max-sm:text-xl max-sm:leading-relaxed leading-loose">
                Connect wallets from any network and manage your digital assets
                with the unified precision that only our platform can provide.
                Your assets are guarded, your identity is secure, and your
                transactions are encrypted. Whether you're within SuperWeaves,
                Telegram, Discord, or beyond, our bot ensures your trading is as
                seamless as it is successful.
              </p>
            </div>
            <div>
            <div className="-z-10 left-0 top-0 h-[400px] w-full overflow-hidden">
              <video
                className=" min-h-full min-w-full object-cover"
                src={banner}
                type="video/webm"
                autoPlay
                muted
                loop
              ></video>
            </div>

              <div>
                {/* <img className="absolute top-[40rem] max-sm:top-[43rem] max-sm:left-24 -z-[10]" src={pinkBG} alt="" /> */}
              </div>
            </div>
            <div className="text-area max-w-[1200px] mx-auto ">
              <p className=" p-16 max-sm:p-4 text-[#333333] text-center z-10 font-semibold max-sm:font-normal font-superLagend text-lg max-sm:text-xl max-sm:text-left leading-loose max-sm:leading-relaxed">
                At DWØPE, we elevate betting to an art form with our diverse
                range of prediction pools. From the movements in the financial
                markets to the outcomes of world events, your bets are placed on
                the future as it unfolds. Place a bet today and experience the
                magic of DWØPE, all without ever needing to leave SuperWeaves.
              </p>
              <div className="blank_cards z-10 relative p-16 flex flex-wrap justify-evenly max-sm:grid max-sm:grid-cols-2 max-sm:p-4">
                <img width={200} src={blankCard} alt="" />
                <img width={200} src={blankCard} alt="" />
                <img width={200} src={blankCard} alt="" />
                <img width={200} src={blankCard} alt="" />

              </div>

              <div className="text-are">
                <p className="p-16 text-[#333333] max-sm:p-4 z-10 max-sm:-z-[10] relative font-superLagend text-lg max-sm:text-xl max-sm:leading-relaxed leading-loose">
                  <div>
                    {/* <img
                      width={800}
                      className="absolute left-[-200px] bottom-[-200px]"
                      src={yellowBG}
                      alt=""
                    /> */}
                  </div>
                  <div className="">
                    <img
                      width={200}
                      className="absolute lg:w-[20rem] max-sm:w-[10rem] opacity-30 right-[85rem] max-sm:right-[-10px]  z-[-10] max-sm:z-[-1] bottom-[-120px]"
                      src={bgShadow3}
                      alt=""
                    />
                  </div>
                  With seamless integration across devices and platforms, DWØPE
                  ensures that your betting experience is fluid, intuitive, and
                  always a tap away. Whether you're analyzing trends or placing
                  bets, our interface is crafted for clarity, speed, and ease of
                  use. Our platform transforms betting into a cerebral sport,
                  combining the excitement of risk with the satisfaction of
                  well-played foresight.
                </p>
              </div>
              <div className="text-area mt-12">
                <p className="font-superLagend text-center max-sm:text-left text-2 text-4xl max-sm:text-2xl max-sm:p-4">
                  The DWØPE NFT Experience
                </p>
                <p className="p-16 text-[#333333] max-sm:p-4 font-superLagend text-lg max-sm:text-xl max-sm:leading-relaxed leading-loose">
                  Embrace the diversity of DWØPE's NFT collection, from the
                  whimsical charm of WEEPLE characters to the majestic might of
                  DWAGONs. Each NFT serves as your digital alter ego, an avatar
                  that not only represents you but also empowers you with
                  special abilities.
                </p>
              </div>

              <div className="avatar-box flex flex-wrap justify-between max-sm:justify-center gap-10 max-sm:gap-4 p-16 max-sm:p-2">
                {Cards.map((item, index) => (
                  <div
                    key={item.id}
                    className="av-cards rounded-2xl w-[300px] max-sm:w-[160px] bg-[#2e2c2c5e] bg"
                  >
                    <div className="overflow-hidden">
                      <img
                        className="object-cover scale-100 hover:scale-125 ease-in duration-500 rounded-2xl bg-no-repeat bg-center"
                        width={300}
                        src={item.image}
                        alt="av"
                      />
                    </div>
                    <div className="data-sec text-[#e0dede] px-4 py-2 max-sm:py-1">
                      <div className="flex justify-between max-sm:gap-2">
                        <span className="font-superLagend text-lg max-sm:text-sm">
                          {item.title}
                        </span>
                        <span className="font-superLagend text-lg max-sm:text-sm">
                          {item.id}
                        </span>
                      </div>
                      <span className="">{item.about}</span>
                    </div>
                  </div>
                ))}

                <div className="text-area relative">
                  <p className="p-16 max-sm:p-4 max-sm:pl-2 text-center max-sm:text-left font-superLagend text-lg max-sm:text-xl max-sm:leading-relaxed leading-loose ">
                    <span>
                      {/* <img
                        width={800}
                        className="absolute z-[-10] bottom-10 right-[-50px] overflow-hidden"
                        src={pinkBlue}
                        alt=""
                      /> */}
                    </span>
                    Trade, auction, and leverage your NFTs in a player-driven
                    market that values rarity, utility, and the story behind
                    each piece. Beyond their visual appeal, these digital assets
                    unlock special features, grant access to exclusive content,
                    and enhance your experience across our platform. From
                    in-game advantages to VIP event access, your NFTs serve as
                    the gateway to having the DWØPEst experience in SuperWeaves.
                  </p>
                </div>


                <Faq />
                <div className=""></div>
                <Footer />
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThirdSection;
