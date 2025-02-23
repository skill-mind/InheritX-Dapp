import React from "react";
import EthicsSection from "@/components/EthicsSection";
import ethicsData from "@/components/EthicsData";

const CodeOfEthics: React.FC = () => {
  return (
    <main className="min-h-screen ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto space-y-10 md:space-y-12 lg:space-y-16  flex flex-col items-center">
          {/* Header Section */}
          <header className="space-y-6 md:space-y-5">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center      ">
              Code of Ethics
            </h1>
            <p className="text-sm md:text-base lg:text-[15px] leading-relaxed md:leading-relaxed lg:leading-relaxed max-w-4xl mx-auto text-center px-4 md:px-6 lg:px-8 ">
              At InheritX, we are committed to upholding the highest standards
              of integrity, security, and transparency. Our Code of Ethics
              ensures that our platform operates ethically, securely, and in
              compliance with industry regulations.
            </p>
          </header>

          {/* Ethics Sections */}
          <div className="space-y-12 md:space-y-12 lg:space-y-16 md:w-[950px] bg-gradient-to-b from-[#323246] to-[#14101c] md:px-7 rounded-2xl px-7">
            {ethicsData.map((section, index) => (
              <div
                key={section.id}
                className={`pb-6 ${
                  index < 2 ? "border-b border-gray-500" : ""
                }`}
              >
                <EthicsSection section={section} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CodeOfEthics;

