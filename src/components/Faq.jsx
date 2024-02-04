import React, { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import yellowBG from "../components/bg/yellowbg.png";
import fl1 from "../components/images/fl1.png";
import fl2 from "../components/images/fl2.png";
import fl3 from "../components/images/fl3.png";
import fl4 from "../components/images/fl4.png";

function Faq() {
  const [isCollapsed1, setIsCollapsed1] = useState(true);
  const [isCollapsed2, setIsCollapsed2] = useState(true);
  const [isCollapsed3, setIsCollapsed3] = useState(true);
  const [isCollapsed4, setIsCollapsed4] = useState(true);
  const [isCollapsed5, setIsCollapsed5] = useState(true);

  const handleToggleCollapse1 = () => {
    setIsCollapsed1(!isCollapsed1);
  };
  const handleToggleCollapse2 = () => {
    setIsCollapsed2(!isCollapsed2);
  };
  const handleToggleCollapse3 = () => {
    setIsCollapsed3(!isCollapsed3);
  };
  const handleToggleCollapse4 = () => {
    setIsCollapsed4(!isCollapsed4);
  };
  const handleToggleCollapse5 = () => {
    setIsCollapsed5(!isCollapsed5);
  };

  return (
    <div className="faq-section pb- relative">
      <div className="absolute blur-md left-[-320px]">
        <img width={200} src={fl1} alt="" />
      </div>
      <div className="absolute blur-md right-[-220px] overflow-hidden">
        <img width={150} src={fl2} alt="" />
      </div>
      <div className="absolute blur-sm left-[-320px] bottom-[-80px] rotate-12 overflow-hidden">
        <img width={200} src={fl3} alt="" />
      </div>
      <div className="absolute blur-md right-[-150px] bottom-[-150px] rotate-45 overflow-hidden">
        <img width={150} src={fl4} alt="" />
      </div>
      <div className="flex flex-col justify-center relative items-center gap-14">
        <div className="absolute left-[-600px]">
          <img src={yellowBG} alt="" />
        </div>

        <div>
          <h1 className="card-title font-superLagend text-4xl">
            Frequently Asked Questions
          </h1>
        </div>
        <div className=" flex flex-col gap-4 text-[#e0dede]">
          <div className="bg-[#0000007e] relative rounded-xl w-[800px] p-6 flex flex-col justify-end gap-4">
            <button
              onClick={handleToggleCollapse1}
              className="flex justify-end"
            >
              <p className="font-superLagend absolute left-6">
                Why are there 6 collections ?
              </p>
              {isCollapsed1 ? (
                <IoIosArrowDropdown size={30} />
              ) : (
                <IoIosArrowDropup size={30} />
              )}
            </button>
            {!isCollapsed1 && (
              <div>
                {/* Content to be collapsed or expanded */}
                <p className="font-superLagend text-sm ">
                  Keep in mind that all these collection will be available in
                  the same mint (our one and only). Regardless, each collection
                  are entitled to different perks (in the SteakStation , and the
                  DreamWave ), there will also be perks to holding multiple
                </p>
              </div>
            )}
          </div>
          <div className="bg-[#0000007e] relative rounded-xl w-[800px] p-6 flex flex-col gap-4 justify-end">
            <button
              className="flex justify-end"
              onClick={handleToggleCollapse2}
            >
              <p className="font-superLagend absolute left-6">
                What's the mint price ?
              </p>
              {isCollapsed2 ? (
                <IoIosArrowDropdown size={30} />
              ) : (
                <IoIosArrowDropup size={30} />
              )}
            </button>
            {!isCollapsed2 && (
              <div>
                {/* Content to be collapsed or expanded */}
                <p className="font-superLagend text-sm ">
                  Keep in mind that all these collection will be available in
                  the same mint (our one and only). Regardless, each collection
                  are entitled to different perks (in the SteakStation , and the
                  DreamWave ), there will also be perks to holding multiple
                </p>
              </div>
            )}
          </div>
          <div className="bg-[#0000007e] relative rounded-xl w-[800px] p-6 flex flex-col gap-4 justify-end">
            <button
              onClick={handleToggleCollapse3}
              className="flex justify-end"
            >
              <p className="font-superLagend absolute left-6">W E N ?</p>
              {isCollapsed3 ? (
                <IoIosArrowDropdown size={30} />
              ) : (
                <IoIosArrowDropup size={30} />
              )}
            </button>
            {!isCollapsed3 && (
              <div>
                {/* Content to be collapsed or expanded */}
                <p className="font-superLagend text-sm ">
                  Keep in mind that all these collection will be available in
                  the same mint (our one and only). Regardless, each collection
                  are entitled to different perks (in the SteakStation , and the
                  DreamWave ), there will also be perks to holding multiple
                </p>
              </div>
            )}
          </div>
          <div className="bg-[#0000007e] relative rounded-xl w-[800px] p-6 flex flex-col justify-end">
            <button
              onClick={handleToggleCollapse4}
              className="flex justify-end"
            >
              <p className="font-superLagend absolute left-6">
                What's this DreamWave game all about ?
              </p>
              {isCollapsed4 ? (
                <IoIosArrowDropdown size={30} />
              ) : (
                <IoIosArrowDropup size={30} />
              )}
            </button>
            {!isCollapsed4 && (
              <div>
                {/* Content to be collapsed or expanded */}
                <p className="font-superLagend text-sm ">
                  Keep in mind that all these collection will be available in
                  the same mint (our one and only). Regardless, each collection
                  are entitled to different perks (in the SteakStation , and the
                  DreamWave ), there will also be perks to holding multiple
                </p>
              </div>
            )}
          </div>
          <div className="bg-[#0000007e] relative rounded-xl w-[800px] p-4 flex flex-col justify-end">
            <button
              onClick={handleToggleCollapse5}
              className="flex justify-end"
            >
              <p className="font-superLagend absolute left-6">
                Is there a Whitelist ?
              </p>
              {isCollapsed5 ? (
                <IoIosArrowDropdown size={30} />
              ) : (
                <IoIosArrowDropup size={30} />
              )}
            </button>
            {!isCollapsed5 && (
              <div>
                {/* Content to be collapsed or expanded */}
                <p className="font-superLagend text-sm ">
                  Keep in mind that all these collection will be available in
                  the same mint (our one and only). Regardless, each collection
                  are entitled to different perks (in the SteakStation , and the
                  DreamWave ), there will also be perks to holding multiple
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;