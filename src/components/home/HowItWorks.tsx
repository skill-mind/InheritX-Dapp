import React, { useState } from "react";
import Image from "next/image";

const HowitWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      method: "step 1",
      title: "Connect Wallet",
      description:
        "Connect your Argent X, Braavos, and other StarkNet-compatible wallets.",
      image: "/step1.png",
    },
    {
      id: 2,
      method: "step 2",
      title: "Manage and Optimize Assets",
      description:
        "Swap and adjust assets as needed before setting up an inheritance plan.",
      image: "/step2.png",
    },
    {
      id: 3,
      method: "step 3",
      title: "Create an Inheritance Plan",
      description:
        "Select assets, designate beneficiaries, and set execution conditions.",
      image: "/step3.png",
    },
    {
      id: 4,
      method: "step 4",
      title: "Automated & Trustless Transfers",
      description:
        "Your digital assets are transferred seamlessly to designated heirs when predefined conditions are met.",
      image: "/step4.png",
    },
    {
      id: 5,
      method: "step 5",
      title: "Beneficiary Control",
      description:
        "Heirs receive designated assets with the option to manage or swap them for other assets if needed, ensuring flexibility and optimal value.",
      image: "/step5.png",
    },
  ];

  return (
    <section className="container mx-auto mt-[150px] max-w-[1280px] px-4 sm:px-6 lg:px-8  ">
      <div className="flex items-center flex-col">
        <button className="border border-[#B5B3B4] text-white hover:bg-[#B5B3B4] px-8 py-3 rounded-full transition-colors">
          How it Works
        </button>
        <h1 className="text-5xl font-bold mt-10">
          Secure & Automated Digital Inheritance
        </h1>
        <p className="text-[#FFFFFF] mt-5 text-center text-sm">
          Set up a trustless inheritance plan that ensures your crypto and NFTs
          are securely transferred to your heirs. With smart contracts and
          advanced <br /> security measures, your assets remain protected and
          accessible only when the time is right.
        </p>
      </div>

      <div className="flex justify-between gap-32 mt-10 text-white w-[1280px] mx-auto">

      
        <div className="w-1/2 rounded-lg ">
          <div className=" ">
            <Image
              src={
                steps.find((s) => s.id === activeStep)?.image || "/wallet.png"
              }
              width={557}
              height={641}
              alt={
                steps.find((s) => s.id === activeStep)?.title || "Step Image"
              }
            />
          </div>
        </div>

        
        <div className="w-1/2  space-y-6 p-6 ">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`w-full text-left flex items-start space-x-4 p-2  rounded-lg transition-all duration-200 ${
                activeStep === step.id ? "text-white" : "text-slate-800"
              }`}
            >
              <div className="flex items-center gap-5 justify-center">
                <div className="relative flex items-center justify-center mt-2">
                  <div className="relative flex items-center justify-center  group">
                    <div className="w-2 h-2 bg-white rounded-full z-10"></div>
                    <div
                      className={`absolute w-5 h-7 rounded-full transition-all duration-200 scale-0 group-hover:scale-100 ${
                        activeStep === step.id
                          ? "bg-gray-500 scale-100"
                          : "bg-[#615F71]"
                      }`}
                    ></div>
                  </div>
                </div>

                <div className="">
                  <h2 className="text-lg font-semibold">{step.method}</h2>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm text-slate-400">{step.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowitWorks;
