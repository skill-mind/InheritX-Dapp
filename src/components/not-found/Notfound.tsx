"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { DirectionAnimation } from "@/motion/Animation";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[url('/not-found-bg.png')] bg-cover bg-center">
      <div className="flex flex-col flex-grow bg-[#020816]/60">
        <Navbar />
        <div className="flex-grow mt-10 flex flex-col items-center justify-center gap-y-12 md:gap-y-16 lg:gap-y-[75px]">
          <div className="relative h-fit text-center">
            <DirectionAnimation>
              <h1
                className="font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#807C7E] via-[#4F4E4F] to-[#4F4E4F]  
              text-[140px] md:text-[250px] lg:text-[300px] leading-[155px] md:leading-[280px] lg:leading-[310px]"
              >
                404
              </h1>
            </DirectionAnimation>
            <h2
              className="absolute bottom-0 left-1/2 -translate-x-1/2 font-bold whitespace-nowrap  
              text-3xl md:text-6xl lg:text-[64px]"
            >
              Page Not Found!
            </h2>
          </div>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-white  
              px-6 md:px-9 py-3 md:py-4 text-sm md:text-base font-normal text-black  
              transition-colors hover:bg-gray-300"
          >
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
}
