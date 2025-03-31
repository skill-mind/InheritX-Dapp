import React from "react";
import heroBg from "../../svg/HeroBg.svg";
import Image from "next/image";
import { DirectionAnimation } from "@/motion/Animation";

export const HeroText = () => {
  return (
    <section className="relative w-full flex justify-center px-6 h-auto ">
      {/* Background Image Overlay */}
      <div className="absolute top-[-35%] left-0 right-0 bottom-0 -z-10">
        <Image
          src={heroBg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>

      <div className="max-w-7xl text-center align-middle h-[100%] my-[5%] relative z-10">
        <DirectionAnimation>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-white leading-tight">
            Secure Your Digital Legacy <br /> With InheritX
          </h1>
        </DirectionAnimation>

        <DirectionAnimation delay={0.4}>
          <p className="py-4 font-thin  sm:text-lg text-gray-400 text-pretty max-w-3xl mx-auto">
            InheritX revolutionizes digital asset inheritance by offering a
            secure and automated platform for transferring cryptocurrencies and
            NFTs to your heirs. Experience peace of mind knowing your digital
            legacy is protected and easily passed on.
          </p>
        </DirectionAnimation>
        <DirectionAnimation delay={0.6}>
          <button className="border mt-5 border-[#413F54] bg-[#211A1D] h-[42px] w-[145px] text-white hover:bg-black/50 rounded-full transition-colors">
            Get Started
          </button>
        </DirectionAnimation>
      </div>
    </section>
  );
};
