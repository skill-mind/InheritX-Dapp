import React from "react";
import Image from "next/image";
import WhyInheritX from "./WhyInheritX";
import HowitWorks from "./HowItWorks";
import { HeroText } from "./HeroText";
import FutureProof from "./FutureProof";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <main className="relative">
      <HeroText />
      <FutureProof />
      <WhyInheritX />
      <HowitWorks />
      <GetStarted />
    </main>
  );
};

export default Hero;
