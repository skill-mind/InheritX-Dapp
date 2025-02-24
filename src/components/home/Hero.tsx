import React from "react";
import Image from "next/image";
import WhyInheritX from "./WhyInheritX";
import HowitWorks from "./HowItWorks";

const Hero = () => {
  return (
    <main className="relative">
      <section className="w-full flex justify-center px-6">
        <div className="max-w-7xl text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Secure Your Digital Legacy <br /> With InheritX
          </h1>
          <p className="py-6 text-base sm:text-lg text-gray-300 text-pretty max-w-2xl mx-auto">
            InheritX revolutionizes digital asset inheritance by offering a secure and automated platform for transferring cryptocurrencies and NFTs to your heirs. Experience peace of mind knowing your digital legacy is protected and easily passed on.
          </p>
          <button className="border border-[#B5B3B4] mt-6 sm:mt-16 text-white hover:bg-[#B5B3B4] px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-colors">
            Get Started
          </button>
        </div>
      </section>

      <section className="mt-10 sm:mt-20 flex justify-center px-4">
        <div className="relative bg-[#0D0F1A] w-full max-w-7xl h-auto sm:h-[533px] flex flex-col sm:flex-row items-center justify-center rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F1A] via-[#121529] to-[#06020E]" />
          <div className="relative text-white text-center z-10 px-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
              <div className="max-w-lg text-center sm:text-left">
                <h2 className="text-2xl sm:text-4xl font-bold leading-tight">
                  Future-Proof Your Digital Wealth with InheritX
                </h2>
                <p className="mt-3 sm:mt-5 text-sm sm:text-base">
                  Don't leave your digital assets to chance. Start planning your legacy with a secure, automated inheritance solution today.
                </p>
              </div>
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <Image
                  src="/Digital.png"
                  width={426}
                  height={557}
                  alt="Digital"
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyInheritX />
      <HowitWorks />

      <section className="w-full mt-16 sm:mt-[100px] flex justify-center px-6">
        <div className="w-full max-w-7xl">
          <div className="flex flex-col justify-center items-center rounded-[30px] sm:rounded-[50px] w-full bg-gradient-to-b from-[#383648] to-[#030304] py-12 px-6 text-center">
            <Image src="/Xlogo.png" width={93} height={93} alt="Digital" className="object-contain" />
            <h2 className="text-white mt-4 text-lg sm:text-2xl font-semibold">
              Secure Your Legacy Today
            </h2>
            <button className="border border-[#B5B3B4] text-white hover:bg-[#B5B3B4] px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-colors mt-4 sm:mt-6">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
