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
  const [isCollapsed6, setIsCollapsed6] = useState(true);

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
  const handleToggleCollapse6 = () => {
    setIsCollapsed6(!isCollapsed6);
  };
  return (
    <div className="faq-section relative max-w-[1200px] mx-auto">
      <div className="absolute  left-0">
        <img width={200} src={fl1} alt="" />
      </div>
      <div className="absolute  right-[-70px] overflow-hidden">
        <img width={150} src={fl2} alt="" />
      </div>
      <div className="absolute  left-0 bottom-[-80px] rotate-12 overflow-hidden">
        <img width={200} src={fl3} alt="" />
      </div>
      <div className="absolute  right-0 bottom-[-150px] rotate-45 overflow-hidden">
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
        <div className="flex gap-24 text-[#e0dede]">
          <div className="flex flex-col gap-6">
            <div className="bg-[#0000007e] py-8 relative rounded-xl w-[500px] p-4 flex flex-col gap-4 justify-end">
              <button className="flex" onClick={handleToggleCollapse1}>
                <div>
                  <p className="font-superLagend text-left relative left-0 ">
                  What makes SuperWeaves different from other Metaverse platforms?
                  </p>
                </div>
                <div className="aboslute right-0">
                  {isCollapsed1 ? (
                    <IoIosArrowDropdown size={30} />
                  ) : (
                    <IoIosArrowDropup size={30} />
                  )}
                </div>
              </button>
              {!isCollapsed1 && (
                <div>
                  {/* Content to be collapsed or expanded */}
                  <p className="font-superLagend text-sm mt-10 ">
                  SuperWeaves is a comprehensive Web3 ecosystem that integrates trading, betting, and social gaming. Our cross-chain functionality and community-centric approach provide a unique, all-in-one experience.
                  </p>
                </div>
              )}
            </div>
            <div className="bg-[#0000007e] py-8 relative rounded-xl w-[500px] p-4 flex flex-col gap-4 justify-end">
              <button className="flex" onClick={handleToggleCollapse2}>
                <div>
                  <p className="font-superLagend text-left relative left-0 ">
                  How does DWØPE ensure the security of transactions within SuperWeaves?
                  </p>
                </div>
                <div className="aboslute right-0">
                  {isCollapsed2 ? (
                    <IoIosArrowDropdown size={30} />
                  ) : (
                    <IoIosArrowDropup size={30} />
                  )}
                </div>
              </button>
              {!isCollapsed2 && (
                <div>
                  {/* Content to be collapsed or expanded */}
                  <p className="font-superLagend text-sm mt-10 ">
                    Security is paramount at DWØPE. We employ advanced measures
                    for asset and information protection, ensuring your trading,
                    betting, and gaming activities are safe and secure.
                  </p>
                </div>
              )}
            </div>
            <div className="bg-[#0000007e] py-8 relative rounded-xl w-[500px] p-4 flex flex-col gap-4 justify-end">
              <button className="flex" onClick={handleToggleCollapse3}>
                <div>
                  <p className="font-superLagend text-left relative left-0 ">
                  Can I manage multiple blockchain wallets with SuperWeaves?
                  </p>
                </div>
                <div className="aboslute right-0">
                  {isCollapsed3 ? (
                    <IoIosArrowDropdown size={30} />
                  ) : (
                    <IoIosArrowDropup size={30} />
                  )}
                </div>
              </button>
              {!isCollapsed3 && (
                <div>
                  {/* Content to be collapsed or expanded */}
                  <p className="font-superLagend text-sm mt-10 ">
                  Absolutely. DWØPE supports interoperable wallets, allowing you to connect and manage your assets across different blockchains effortlessly, all within our app.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-6">
          <div className="bg-[#0000007e] py-8 relative rounded-xl w-[500px] p-4 flex flex-col gap-4 justify-end">
              <button className="flex" onClick={handleToggleCollapse4}>
                <div>
                  <p className="font-superLagend text-left relative left-0 ">
                    What betting opportunities does SuperWeaves offer?
                  </p>
                </div>
                <div className="aboslute right-0">
                  {isCollapsed4 ? (
                    <IoIosArrowDropdown size={30} />
                  ) : (
                    <IoIosArrowDropup size={30} />
                  )}
                </div>
              </button>
              {!isCollapsed4 && (
                <div>
                  {/* Content to be collapsed or expanded */}
                  <p className="font-superLagend text-sm mt-10 ">
                  SuperWeaves offers a dynamic betting landscape with varied pools driven by real-time events in the Web3 space. Bet on outcomes across a range of activities, with the chance to earn substantial rewards.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-[#0000007e] py-8 relative rounded-xl w-[500px] p-4 flex flex-col gap-4 justify-end">
              <button className="flex" onClick={handleToggleCollapse5}>
                <div>
                  <p className="font-superLagend text-left relative left-0 ">
                  How does DWØPE ensure fair play and transparency in betting and gaming?
                  </p>
                </div>
                <div className="aboslute right-0">
                  {isCollapsed5 ? (
                    <IoIosArrowDropdown size={30} />
                  ) : (
                    <IoIosArrowDropup size={30} />
                  )}
                </div>
              </button>
              {!isCollapsed5 && (
                <div>
                  {/* Content to be collapsed or expanded */}
                  <p className="font-superLagend text-sm mt-10 ">
                  DWØPE is committed to fair play and transparency across all aspects of our platform. By leveraging blockchain technology, every bet, trading card game outcome, and transaction is recorded on a decentralized ledger, ensuring immutable proof of all activities. This not only guarantees fairness but also provides our users with complete visibility and trust in the integrity of our betting and gaming environments.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-[#0000007e] py-[1.3rem] relative rounded-xl w-[500px] p-4 flex flex-col gap-4 justify-end">
              <button className="flex" onClick={handleToggleCollapse6}>
                <div>
                  <p className="font-superLagend text-left relative left-0 ">
                  What makes DWØPE's DWOOBz NFT collection unique in the digital marketplace?
                  </p>
                </div>
                <div className="aboslute right-0">
                  {isCollapsed6 ? (
                    <IoIosArrowDropdown size={30} />
                  ) : (
                    <IoIosArrowDropup size={30} />
                  )}
                </div>
              </button>
              {!isCollapsed6 && (
                <div>
                  {/* Content to be collapsed or expanded */}
                  <p className="font-superLagend text-sm mt-10 ">
                  DWØPE's NFTs stand out in the digital marketplace for their intrinsic utility and integration within our ecosystem. From granting access to exclusive content and areas within the metaverse to offering enhancements in our gaming and betting modules, our NFTs are designed to enrich the user experience, making them a valuable asset for both collectors and active platform participants. 
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
