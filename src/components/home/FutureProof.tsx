import Image from "next/image";
import futureBg from "@/svg/futureBg.svg";
import frame from "@/svg/Frame.svg";
import shield from "@/svg/shield.svg";
import { DirectionAnimation } from "@/motion/Animation";

const DisplayShield = () => {
  return (
    <div className=" relative h-[300px] md:h-[400px] md:mr-[-190px]">
      <Image
        src={frame}
        alt="frame"
        className="h-[100%] w-[100%] rounded-tl-;g rounded-bl-lg"
      />
      <Image
        src={shield}
        alt="sheld"
        className="absolute cursor-pointer z-10 top-[40%] md:top-[37%] right-[40%] md:right-[43%]  h-[60px] w-[60px] md:h-[100px] md:w-[100px] zoom-pulse"
      />
    </div>
  );
};

const FutureProof = () => {
  return (
    <DirectionAnimation>
      <section className="mt-10 sm:mt-20 flex justify-center px-4">
        <div className="relative bg-[#0D0F1A] w-full max-w-7xl h-auto sm:h-[533px] flex flex-col sm:flex-row items-center justify-center rounded-3xl overflow-hidden">
          {/* Background Image Overlay */}
          <div className="absolute top-[-35%] left-0 right-0 bottom-0 z-1">
            <Image
              src={futureBg}
              alt="Background"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
            />
          </div>

          <div className="absolute inset-0" />
          <div className="relative text-white text-center z-10 w-[100%] px-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
              <DirectionAnimation direction="left-to-right" delay={0.5}>
                <div className="max-w-lg flex-1 text-left sm:text-left">
                  <h2 className="text-2xl sm:text-4xl font-bold leading-tight">
                    Future-Proof Your Digital Wealth with InheritX
                  </h2>
                  <p className="mt-3 sm:mt-5 text-sm sm:text-base">
                    Don't leave your digital assets to chance. Start planning
                    your legacy with a secure, automated inheritance solution
                    today.
                  </p>
                </div>
              </DirectionAnimation>
              <div className="w-full h-ful min-w-[300px] flex-1 relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg ">
                <DirectionAnimation direction="right-to-left" delay={0.5}>
                  <DisplayShield />
                </DirectionAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DirectionAnimation>
  );
};

export default FutureProof;
