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
        <div className="p-12 mt-60 flex">
          <div className="">
            <h1 className="font-superLagend z-10 text-2 text-3xl">
              Play, Connect, Conquer
            </h1>
            <p className="text-2xl text-justify  mt-8 font-quantico leading-loose">
              The gaming experience in SuperWeaves is a place where players can
              trade, sell, or purchase NFT assets directly without
              intermediaries. Customize your decks with a mix of RNG and
              strategy, and enjoy a fun Multiplayer Trading Card Game
              experience, a first of its kind.
            </p>
          </div>
          <div>
            <img
              className="w-[65rem] top-[-10rem] left-[4rem] relative"
              src={bgShadow}
              alt=""
            />
          </div>
        </div>
        <div className="card-line flex items-center">
          <div>
            <div className="polygon absolute right-96">
              <img className="mr-60" src={pinkBlue} alt="" />
            </div>
            <div className="cards relative flex justify-around">
              <div className="flex pl-28 gap-[50px]">
                {cardData.map((id, index) => (
                  <div className="card">
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
      </div>

      
      <div className="trade-sec relative">
      <div className="flex justify-center  max-w-[1200px] mx-auto">
        <div className="text-right absolute top-16 flex">
        <div className="">
          <img className="w-96" src={bgShadow2} alt="" />
        </div>
          <p className="font-quantico w-[800px] text-xl leading-loose font-semibold">
            Harness the power of the LUKSO blockchain's groundbreaking LSPs to
            engage in secure, and truly decentralized transactions that affirm
            your true ownership of digital assets.
          </p>
        </div>
        
      </div>
       
        <div className="absolute right-20">
          <img width={800} src={pinkBG} alt="" />
        </div>
        <div className="relative w-[100%]  top-[500px]">
          <span className="text-2 md:ml-[500px]  text-4xl  font-superLagend flex">
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

            <div className="text-area pt-6 p-16 max-w-[1200px] mx-auto ">
              <p className="font-quantico text-2xl leading-loose">
                Our tradebot is your trusted companion, navigating you through
                the complexities of multiple blockchains with ease and agility.
                Adapt and thrive with DWØPE's customizable trading strategies,
                designed to align with your personal risk profile and market
                predictions.
              </p>
              <br />
              <br />

              <p className="font-quantico text-2xl leading-loose">
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
                <img className="absolute top-[40rem]" src={pinkBG} alt="" />
              </div>
            </div>
            <div className="text-area max-w-[1200px] mx-auto ">
              <p className=" p-16 text-center z-10 font-semibold font-quantico text-2xl leading-loose">
                At DWØPE, we elevate betting to an art form with our diverse
                range of prediction pools. From the movements in the financial
                markets to the outcomes of world events, your bets are placed on
                the future as it unfolds. Place a bet today and experience the
                magic of DWØPE, all without ever needing to leave SuperWeaves.
              </p>
              <div className="blank_cards z-10 relative p-16 flex flex-wrap justify-evenly">
                <img width={200} src={blankCard} alt="" />
                <img width={200} src={blankCard} alt="" />
                <img width={200} src={blankCard} alt="" />
                <img width={200} src={blankCard} alt="" />
                <img width={200} src={blankCard} alt="" />
                {/* <div>
                  <img
                    className="absolute z-[-10] left-[-100px] bottom-60 blur-sm"
                    width={300}
                    src={bgShadow2}
                    alt=""
                  />
                </div> */}
              </div>

              <div className="text-are">
                <p className="p-16 z-10 relative font-quantico text-2xl leading-loose">
                  <div>
                    <img
                      width={800}
                      className="absolute left-[-200px] bottom-[-200px]"
                      src={yellowBG}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <img
                      width={200}
                      className="absolute right-[0]  z-[-10] blur-sm bottom-[-120px]"
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
                <p className="font-superLagend text-center text-2 text-4xl ">
                  The DWØPE NFT Experience
                </p>
                <p className="p-16 font-quantico text-2xl leading-loose">
                  Embrace the diversity of DWØPE's NFT collection, from the
                  whimsical charm of WEEPLE characters to the majestic might of
                  DWAGONs. Each NFT serves as your digital alter ego, an avatar
                  that not only represents you but also empowers you with
                  special abilities.
                </p>
              </div>

              <div className="avatar-box flex flex-wrap justify-between gap-10 p-16">
                {Cards.map((item, index) => (
                  <div
                    key={item.id}
                    className="av-cards rounded-2xl w-[300px] bg-[#2e2c2c5e] bg"
                  >
                    <div className="overflow-hidden">
                      <img
                        className=" object-cover scale-100 hover:scale-125 ease-in duration-500 rounded-2xl bg-no-repeat bg-center"
                        width={300}
                        src={item.image}
                        alt="av"
                      />
                    </div>
                    <div className="data-sec px-4 py-2">
                      <div className="flex justify-between ">
                        <span className="font-superLagend text-lg">
                          {item.title}
                        </span>
                        <span className="font-superLagend text-lg">
                          {item.id}
                        </span>
                      </div>
                      <span>{item.about}</span>
                    </div>
                  </div>
                ))}

                <div className="text-area relative">
                  <p className="p-16 text-center font-quantico text-2xl leading-loose ">
                    <span>
                      <img
                        width={800}
                        className="absolute z-[-10] bottom-10 right-[-50px] overflow-hidden"
                        src={pinkBlue}
                        alt=""
                      />
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
                <div className="pt-24"></div>
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
