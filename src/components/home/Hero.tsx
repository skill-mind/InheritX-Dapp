import React from "react";
import Image from "next/image";
import WhyInheritX from "./WhyInheritX";
import HowitWorks from "./HowItWorks";

const Hero = () => {
  return (
    <main className="relative  min-h-screen">
      
      <section className="w-full   flex  justify-center px-6 ">
        <div className="max-w-7xl pt-20 text-center">
          <h1 className="text-4xl md:text-7xl lg:text-7xl font-bold text-white leading-tight">
            Secure Your Digital Legacy <br /> With InheritX
          </h1>
          <p className="py-6 text-lg text-gray-300 text-pretty max-w-2xl mx-auto">
            InheritX revolutionizes digital asset inheritance by offering a
            secure and automated platform for transferring cryptocurrencies and
            NFTs to your heirs. Experience peace of mind knowing your digital
            legacy is protected and easily passed on.
          </p>
          <button className="border border-[#B5B3B4] mt-16 text-white hover:bg-[#B5B3B4] px-8 py-3 rounded-full transition-colors">
            Get Started
          </button>
        </div>
      </section>

    
      <section className=" mt-20 flex justify-center ">
        <div className="relative  bg-[#0D0F1A] h-[533px] w-[1280px] flex items-center justify-center rounded-3xl  overflow-hidden mb-">
          
          <div className="relative bg-[#0D0F1A] h-[533px] w-[1280px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F1A] via-[#121529] to-[#06020E]" />
            <div className="absolute inset-0 bg-opacity-100">
              <div
                className="absolute bottom-0 left-[-128px] w-[1408px] h-[120%] rounded-tr-none rounded-tl-[100%] border-t-[2px] border-l-[2px] border-[#071C2F] blur-0 opacity-40"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, #051325 100%)",
                }}
              />

              <div
                className="absolute bottom-0 left-[128px] w-[1152px] h-[70%] rounded-tr-none rounded-tl-[100%] border-t-[2px] border-l-[2px] border-[#071C2F] blur-0 opacity-40"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, #051325 100%)",
                }}
              />

              <div
                className="absolute bottom-0 left-[640px] w-[640px] h-[50%] rounded-tr-none rounded-tl-[100%] border-t-[2px] border-l-[2px] border-[#071C2F] blur-0 opacity-40"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, #051325 100%)",
                }}
              />

              <div
                className="absolute bottom-0 left-[896px] w-[384px] h-[30%] rounded-tr-none rounded-tl-[100%] border-t-[2px] border-l-[2px] border-[#071C2F] blur-0 opacity-40"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, #051325 100%)",
                }}
              />
            </div>

            {/* Content */}
            <div className="relative text-white text-center z-10">
              <div className="flex items-center justify-center gap-8 inset-0 bg-gradient-to-br from-blue-900/20 to-transparent h-[633px]  w-[1280px]">
                <div className="max-w-lg">
                  {" "}
                  <h2 className="text-4xl font-bold text-start leading-10">
                    Future-Proof Your Digital Wealth with InheritX
                  </h2>
                  <p className="text-start mt-5 ">
                    Don't leave your digital assets to chance. Start planning
                    your legacy with a secure, automated inheritance solution
                    today.
                  </p>
                </div>

                <div className="text-white">
                  {" "}
                  <Image
                    src="/Digital.png"
                    width={426}
                    height={557}
                    alt="Digital"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyInheritX />
      <HowitWorks />

      <section className="w-full mt-[100px]  flex  justify-center px-6 ">
        <div className="w-[1280px] ">
        <div className="flex flex-col justify-center rounded-[50px] items-center max-w-7xl w-[1278px] h-[456px]  text-center bg-gradient-to-b from-[#383648] to-[#030304] ">
          <Image
            src="/Xlogo.png"
            width={93}
            height={93}
            alt="Digital"
            className="object-contain"
          />

          <h2 className="text-white mt-4 text-2xl font-semibold">
            Secure Your Legacy Today
          </h2>

          <button className="border border-[#B5B3B4] text-white hover:bg-[#B5B3B4] px-8 py-3 rounded-full transition-colors mt-6">
            Get Started
          </button>
        </div>

        </div>
      
      </section>
    </main>
  );
};

export default Hero;
