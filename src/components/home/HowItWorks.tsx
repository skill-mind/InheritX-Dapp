import React, { useState } from "react";
import Image from "next/image";
import { DirectionAnimation } from "@/motion/Animation";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      method: "Step 1",
      title: "Connect Wallet",
      description:
        "Connect your Argent X, Braavos, and other StarkNet-compatible wallets.",
      image: "/step1.png",
    },
    {
      id: 2,
      method: "Step 2",
      title: "Manage and Optimize Assets",
      description:
        "Swap and adjust assets as needed before setting up an inheritance plan.",
      image: "/step2.png",
    },
    {
      id: 3,
      method: "Step 3",
      title: "Create an Inheritance Plan",
      description:
        "Select assets, designate beneficiaries, and set execution conditions.",
      image: "/step3.png",
    },
    {
      id: 4,
      method: "Step 4",
      title: "Automated & Trustless Transfers",
      description:
        "Your digital assets are transferred seamlessly to designated heirs when predefined conditions are met.",
      image: "/step4.png",
    },
    {
      id: 5,
      method: "Step 5",
      title: "Beneficiary Control",
      description:
        "Heirs receive designated assets with the option to manage or swap them for other assets if needed, ensuring flexibility and optimal value.",
      image: "/step5.png",
    },
  ];

  return (
    <section className="container mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center">
        <DirectionAnimation>
          <button className="border border-[#B5B3B4]/30 bg-gradient-to-b from-[#4F4E4F]/40 to-transparent text-white hover:bg-none h-[42px] w-[176px] rounded-full transition-colors">
            How It Works
          </button>
        </DirectionAnimation>
        <DirectionAnimation>
          <h1 className="text-3xl md:text-5xl font-bold mt-6 text-white">
            Secure & Automated Digital Inheritance
          </h1>
        </DirectionAnimation>
        <DirectionAnimation>
          <p className="text-[#FFFFFF] mt-4 text-[10px] font-extralight md:text-base px-3 max-w-[879px]">
            Set up a trustless inheritance plan that ensures your crypto and
            NFTs are securely transferred to your heirs. With smart contracts
            and advanced security measures, your assets remain protected and
            accessible only when the time is right.
          </p>
        </DirectionAnimation>
      </div>

      <DirectionAnimation>
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mt-12 text-white">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={
                steps.find((s) => s.id === activeStep)?.image || "/wallet.png"
              }
              width={400}
              height={500}
              alt={
                steps.find((s) => s.id === activeStep)?.title || "Step Image"
              }
              className="object-contain w-full max-w-md md:max-w-lg lg:max-w-xl"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            {steps.map((step) => (
              <DirectionAnimation delay={step.id * 0.1}>
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  onMouseEnter={() => setActiveStep(step.id)}
                  className={`w-full text-left flex items-start space-x-4 p-4 rounded-lg transition-all duration-200 ${
                    activeStep === step.id ? "text-white" : "text-gray-500"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <div
                        className={`absolute w-6 h-6 rounded-full transition-all duration-200 ${
                          activeStep === step.id
                            ? "bg-gray-500 scale-100"
                            : "bg-[#615F71] scale-0"
                        }`}
                      ></div>
                    </div>
                    <div>
                      <h2 className="text-sm font-semibold uppercase">
                        {step.method}
                      </h2>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="text-sm text-gray-400 font-extralight">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </button>
              </DirectionAnimation>
            ))}
          </div>
        </div>
      </DirectionAnimation>
    </section>
  );
};

export default HowItWorks;
