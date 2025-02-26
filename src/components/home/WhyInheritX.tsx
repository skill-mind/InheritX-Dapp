import React from "react";
import Image from "next/image";

const WhyInheritX = () => {
  return (
    <div className="container mx-auto mt-[50px] max-w-[1280px] px-4 sm:px-6 lg:px-8">
      <div className="flex items-center flex-col text-center">
        <button className="border border-[#B5B3B4] text-white hover:bg-[#B5B3B4] px-6 py-2 sm:px-8 sm:py-3 rounded-full transition-colors">
          Why inheritX
        </button>

        <h1 className="text-3xl sm:text-5xl font-bold mt-6 sm:mt-10">
          Protect Your Digital Assets For The Future
        </h1>

        <p className="text-[#FFFFFF] mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed">
          Safeguard your digital wealth with a secure, automated inheritance
          plan. Ensure your assets remain accessible to your heirs without risks
          of loss, disputes, or legal uncertainty.
        </p>
      </div>

      {/* Responsive Grid Layout */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 1st Card */}
          <div className="bg-[#413F54] text-white p-6 rounded-2xl shadow-lg w-full md:w-[360px] lg:w-[390px] min-h-[300px] relative overflow-hidden">
            <h2 className="text-[20px] sm:text-[24px] font-semibold">
              Top Notch Security
            </h2>
            <p className="text-gray-400 mt-1 text-[12px] sm:text-sm">
              Your digital assets are protected with end-to-end encryption,
              multi-signature authentication, and regular audits, ensuring only
              your chosen heirs can access them.
            </p>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[330px] h-[160px] bg-gradient-to-b from-[#4F4E4F] to-transparent rounded-t-full"></div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[230px] h-[110px] bg-gradient-to-b from-[#7A7879] to-transparent rounded-t-full"></div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[150px] h-[70px] bg-gradient-to-b from-[#B5B3B4] to-transparent rounded-t-full"></div>

            <div className="absolute bottom-[15px] left-1/2 -translate-x-1/2 rounded-full">
              <Image src="/lock.png" width={51} height={54} alt="Lock" />
            </div>
          </div>

          {/* 2nd Card */}
          <div className="bg-[#413F54] text-white p-6 rounded-2xl shadow-lg w-full md:w-[360px] lg:w-[390px] min-h-[300px] relative overflow-hidden">
            <h2 className="text-lg font-semibold">Never Lose Your Assets</h2>
            <p className="text-gray-400 mt-2 text-sm">
              Prevent your digital wealth from becoming permanently inaccessible
              by assigning trusted heirs and securing recovery options in
              advance.
            </p>

            <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[330px] h-[180px] bg-[#4F4E4F] opacity-50 rounded-t-[30px]"></div>
            <div className="absolute bottom-[-19px] left-1/2 -translate-x-1/2 w-[230px] h-[150px] bg-[#7A7879] opacity-30 rounded-t-[30px]"></div>
            <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-[150px] h-[120px] bg-[#B5B3B4] opacity-30 rounded-t-[30px]"></div>

            <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 p-3 rounded-xl">
              <Image src="/chainrr.png" width={51} height={54} alt="Chain" />
            </div>
          </div>

          {/* 3rd Card */}
          <div className="bg-[#413F54] text-white p-6 rounded-2xl shadow-lg w-full md:w-[360px] lg:w-[390px] min-h-[300px] overflow-hidden flex flex-col justify-center">
            <h2 className="text-[20px] sm:text-[24px] font-semibold">
              No Middlemen Neededmd
            </h2>
            <p className="text-gray-400 mt-1 text-[12px] sm:text-sm">
              Smart contracts automate inheritance, so your crypto and NFTs are
              securely transferred to your heirs without banks, lawyers, or
              delays.
            </p>

            <div className="flex justify-center items-center mt-4">
              <Image src="/Bitc.png" width={267} height={126} alt="Bitcoin" />
            </div>
          </div>

          {/* 4th Card */}
          
          <div className="bg-[#413F54] text-white p-6 rounded-2xl shadow-lg w-full md:w-[360px] lg:w-[390px] min-h-[300px] relative overflow-hidden">
            <div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold">
                Clear & Legal Process
              </h2>
              <p className="text-gray-400 mt-1 text-[12px] sm:text-sm">
                inheritX followers strict legal and compliance standards, ensuring your inheritance is safe, transparent, and dispute-free.
              </p>
            </div>

            <div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[380px] h-[172px] bg-gradient-to-b from-[#4F4E4F] to-transparent rounded-t-full"></div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[310px] h-[143px] bg-gradient-to-b from-[#7A7879] to-transparent rounded-t-full"></div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[250px] h-[118px] bg-gradient-to-b from-[#B5B3B4] to-transparent rounded-t-full"></div>

              <div className="absolute bottom-[16px] left-1/2 -translate-x-1/2 rounded-full">
                <Image src="/Vector.png" width={51} height={50} alt="Lock" />
              </div>
              <div className="relative flex justify-center mt-[100px] items-center">
                {/* User Icons (Top, Bottom, Left, Right) */}
                <div className="absolute top-[-48px] left-2/3 transform -translate-x-1/2">
                  <Image src="/vect.png" width={22.5} height={22.5} alt="vector" />
                </div>
                <div className="absolute top-[-68px] left-[93px] transform -translate-x-1/2">
                  <Image src="/vect.png" width={22.5} height={22.5} alt="vector" />
                </div>
                <div className="absolute left-[12px] top-10 transform -translate-y-1/2">
                  <Image src="/vect.png" width={22.5} height={22.5} alt="vector" />
                </div>
                <div className="absolute right-[50px] top-10 transform -translate-y-1/2">
                  <Image src="/vect.png" width={22.5} height={22.5} alt="vector" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex flex-col gap-10 bg-[#413F54] md:w-full lg:w-[358px] rounded-2xl p-6">
          <div className="mb-8">
            <h2 className="text-[20px] sm:text-[24px] font-semibold">
              Optimized Asset Control
            </h2>
            <p className="text-gray-400 mt-1 text-[12px] sm:text-sm">
              Swap assets before locking them into an inheritance plan to
              ensure your heirs receive the most suitable and optimized
              portfolio. Beneficiaries can also swap inherited assets
              post-transfer to align with their preferences.
            </p>
          </div>

          <div className="flex flex-col items-center mt-12 gap-5">
            <Image src="/usdc.png" width={250} height={90} alt="USDC" />
            <Image src="/stark.png" width={250} height={90} alt="Stark" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyInheritX;
