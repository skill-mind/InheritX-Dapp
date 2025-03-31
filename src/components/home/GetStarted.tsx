import React from "react";
import logo from "@/svg/whiteX.svg";
import Image from "next/image";
import { DirectionAnimation } from "@/motion/Animation";

const GetStarted = () => {
  return (
    <DirectionAnimation>
      <section className="w-full mt-16 sm:mt-[100px] flex justify-center px-6">
        <div className="w-full max-w-7xl">
          <div className="flex flex-col justify-center items-center rounded-[30px] sm:rounded-[50px] w-full bg-gradient-to-b from-[#383648] to-[#030304] py-12 px-6 text-center">
            <Image
              src={logo}
              width={73}
              height={73}
              alt="Digital"
              className="object-contain"
            />
            <DirectionAnimation delay={0.5}>
              <h2 className="text-white mt-4 text-[48px] sm:text-2xl font-semibold">
                Secure Your Legacy Today
              </h2>
            </DirectionAnimation>
            <DirectionAnimation delay={0.7}>
              <button className="border border-[#B5B3B4] bg-white text-black hover:bg-[#B5B3B4] px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-colors mt-4 sm:mt-6">
                Get Started
              </button>
            </DirectionAnimation>
          </div>
        </div>
      </section>
    </DirectionAnimation>
  );
};

export default GetStarted;
