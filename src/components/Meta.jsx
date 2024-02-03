import React from "react";
import card from "../components/images/Card1.png";
import purpleBg from "../components/bg/pinkBlue.png";
import blueBg from "../components/bg/bluebg.png";

function Meta() {
  return (
    <div className="first-section ">
      <div>
        <img
          className="w-[40rem] pinkBlueBg absolute right-[0] top-16"
          src={blueBg}
          alt="bg1"
        />
      </div>
      <div>
        <img
          className="w-[60rem] pinkBlueBg absolute right-0"
          src={purpleBg}
          alt="bg1"
        />
      </div>
      <div className="p-16">
        <div className="relative top-56">
          <div className="flex justify-around">
            <div className="card-side">
              <img className="relative z-10" src={card} alt="card sample" />
              <div className="">
                <img
                  className="absolute top-32 w-[55rem] left-[-400px]"
                  src={purpleBg}
                  alt=""
                />
              </div>
              <h1 className="font-superLagend  card-title text-2xl ">
                Cheetah Baby
              </h1>
              
            </div>

            <div className="text-side">
              <h1 className="text-2 gap-4 font-superLagend flex flex-col items-center text-4xl">
                <span>The Metaverse's </span>
                <span>Game-Changer</span>
              </h1>
              <p className="w-[30rem] mt-6 leading-relaxed text-2xl font-quantico">
                Welcome to SuperWeaves, the first application built by DWØPE.
                This super app will revolutionize the way you engage with Web3.
                Our platform combines trading, betting, and social gaming in one
                seamless experience. Unveil a world where your digital actions
                have real-world results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meta;
