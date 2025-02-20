import React from "react";
import Image from "next/image";

const WhyInheritX = () => {
  return (
    <div className="container mx-auto  mt-[150px] max-w-[1280px] px-4 sm:px-6 lg:px-8 ">
      <div className="flex items-center  flex-col">
        <button className="border border-[#B5B3B4] text-white hover:bg-[#B5B3B4] px-8 py-3 rounded-full transition-colors">
          Why inheritX
        </button>

        <h1 className="text-5xl font-bold mt-10">
          Protect Your Digital Assets For The Future
        </h1>

        <p className="text-[#FFFFFF] mt-5 text-center text-sm ">
          Safeguard your digital wealth with a secure, automated inheritance
          plan. Ensure your assets remain accessible to your heirs without risks
          of loss, <br /> disputes, or legal uncertainty.
        </p>
      </div>

      <div className="flex  gap-12 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* first card */}
          <div className="bg-[#413F54] text-white p-6 rounded-2xl shadow-lg w-[400px] h-[300px] relative overflow-hidden">
            <h2 className="text-[24px] font-semibold">Top Notch Security</h2>
            <p className="text-gray-400 mt-1 text-[12px]">
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

          {/* 2nd card */}
          <div className="bg-[#413F54] text-white p-6 rounded-2xl shadow-lg w-[400px] h-[300px] relative overflow-hidden">
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
              <Image src="/chainrr.png" width={51} height={54} alt="Lock" />
            </div>
          </div>

          {/* 3rd card */}
          <div className="bg-[#413F54] text-white p-6 rounded-2xl shadow-lg w-[400px] h-[300px] overflow-hidden flex flex-col justify-center">
            <h2 className="text-[24px] font-semibold">No Middlemen Needed</h2>
            <p className="text-gray-400 mt-1 text-[12px]">
              Smart contracts automate inheritance, so your crypto and NFTs are
              securely transferred to your heirs without banks, lawyers, or
              delays.
            </p>

            <div className="flex justify-center items-center mt-4">
              <Image
                src="/Bitc.png"
                width={267}
                height={126}
                alt="Bitcoin Logo"
              />
            </div>
          </div>

          {/* 4th card */}
          <div className="bg-[#413F54] text-white p-6 rounded-2xl  w-[400px] h-[300px] relative overflow-hidden">
            <h2 className="text-[24px] font-semibold">Clear & Legal Process</h2>
            <p className="text-gray-400 mt-1 text-[12px]">
              InheritX follows strict legal and compliance standards, ensuring
              your inheritance is safe, transparent, and dispute-free.
            </p>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[330px] h-[160px] bg-gradient-to-b from-[#4F4E4F] to-transparent rounded-t-full"></div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[230px] h-[110px] bg-gradient-to-b from-[#7A7879] to-transparent rounded-t-full"></div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[150px] h-[70px] bg-gradient-to-b from-[#B5B3B4] to-transparent rounded-t-full"></div>

            <div className="absolute bottom-[15px] left-1/2 -translate-x-1/2 rounded-full">
              <Image src="/legal.png" width={51} height={54} alt="Lock" />
            </div>
          </div>
        </div>

        <div className="bg-[#413F54] w-[358px] rounded-2xl p-6">
          <div className="flex flex-col gap-48">
            <div>
            <h2 className="text-[24px] font-semibold">Optimized Asset Control</h2>
            <p className="text-gray-400 mt-1 text-[12px]">
                Swap assets before locking them into an inheritance plan to
                ensure your heirs receive the most suitable and optimized
                portfolio based on current market conditions. Beneficiaries can
                also swap inherited assets post-transfer, allowing them to
                adjust their holdings to align with their preferences or
                financial goals.
              </p>
            </div>

            <div className=" flex flex-col items-center gap-5">
            <Image src="/usdc.png" width={250} height={90} alt="Lock" />
            <Image src="/stark.png" width={250} height={90} alt="Lock" />
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default WhyInheritX;
