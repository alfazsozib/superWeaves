import React from "react";
import bgShadow from "../components/images/shadow2.png";
import pinkBg from "../components/bg/Ellipse 4.png";
import pinkBG from "../components/bg/pinkbg.png";
import polygon from "../components/bg/Polygon 3.png";
import bgShadow2 from "../components/images/shadow1.png";
import mid_banner from "../components/images/mid_banner.jpeg";
import mid_banner2 from "../components/images/mid_banner2.jpeg";
import card1 from "../components/cards/image38.png";

function ThirdSection() {
  return (
    <>
      <div>
        <div className="p-32 mt-60 flex">
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
              className="w-[65rem] top-[-10rem] left-28 relative blur-sm"
              src={bgShadow}
              alt=""
            />
          </div>
        </div>
        <div className="card-line flex items-center">
          <div>
            <div className="polygon absolute">
              <img src={polygon} alt="" />
            </div>
            <div className="cards relative flex justify-around p-16">
              <img className="w-44" src={card1} alt="" />
              <img className="w-44" src={card1} alt="" />
              <img className="w-44" src={card1} alt="" />
              <img className="w-44" src={card1} alt="" />
              <img className="w-44" src={card1} alt="" />
              <img className="w-44" src={card1} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-1/2 right-16 ">
        <div className="text-right">
          <p className="font-quantico text-xl leading-loose font-semibold">
            Harness the power of the LUKSO blockchain's groundbreaking LSPs to
            engage in secure, and truly decentralized transactions that affirm
            your true ownership of digital assets.
          </p>
        </div>
      </div>
      <div className="trade-sec">
        <div className="absolute left-[-100px] blur-sm">
          <img className="w-96" src={bgShadow2} alt="" />
        </div>
        <div className="absolute right-0">
          <img width={800} src={pinkBg} alt="" />
        </div>
        <div className="relative w-[100%]  top-96">
          <span className="text-2  text-4xl ml-16 font-superLagend flex">
            Strategize, Trade, Thrive
          </span>

          <div className="banner-second mt-12">
            <img
              className="w-[100%] h-96 bg-no-repeat bg-cover bg-center"
              src={mid_banner}
              alt=""
            />
            <div className="text-area pt-10 p-16">
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
              <img
                className=" relative w-[100%] h-96 z-10 bg-no-repeat bg-cover bg-center"
                src={mid_banner2}
                alt=""
              />
              <div>
                <img className="absolute top-[40rem]" src={pinkBG} alt="" />
              </div>
            </div>
            <div className="text-area">
              <p className=" p-16 z-10 font-semibold font-quantico text-2xl leading-loose">
                At DWØPE, we elevate betting to an art form with our diverse
                range of prediction pools. From the movements in the financial
                markets to the outcomes of world events, your bets are placed on
                the future as it unfolds. Place a bet today and experience the
                magic of DWØPE, all without ever needing to leave SuperWeaves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThirdSection;
