import React from "react";

interface GuidelinesProps {
  guideline: "privacy-policy" | "terms-and-conditions" | "code-of-ethics";
  setGuideline: React.Dispatch<
    React.SetStateAction<
      "privacy-policy" | "terms-and-conditions" | "code-of-ethics"
    >
  >;
}
function Guidelines({ guideline, setGuideline }: GuidelinesProps) {
  return (
    <section className=" w-full">
    <p className="font-bold md:text-5xl text-3xl text-white text-center">
      Policies and Guidelines
    </p>

    <div className="w-full flex flex-wrap justify-center items-center gap-3 md:gap-x-5 mt-5 mb-10 text-sm md:text-base font-normal">
<div
  className={` px-3 py-1 md:px-4 md:py-2 rounded-full cursor-pointer transition-colors duration-300 
    ${guideline === "privacy-policy" ? "bg-[#1B0055] border-[2px] border-[#C0BFC6]" : "border-[1px] border-[#413F54]"}`}
  onClick={() => setGuideline("privacy-policy")}
>
  Privacy Policy
</div>
<div
  className={` px-3 py-1 md:px-4 md:py-2 rounded-full cursor-pointer transition-colors duration-300 
    ${guideline === "terms-and-conditions" ? "bg-[#1B0055] border-[2px] border-[#C0BFC6]" : "border-[1px] border-[#413F54]"}`}
  onClick={() => setGuideline("terms-and-conditions")}
>
  Terms and Conditions
</div>
<div
  className={` px-3 py-1 md:px-4 md:py-2 rounded-full cursor-pointer transition-colors duration-300 
    ${guideline === "code-of-ethics" ? "bg-[#1B0055] border-[2px] border-[#C0BFC6]" : "border-[1px] border-[#413F54]"}`}
  onClick={() => setGuideline("code-of-ethics")}
>
  Code of Ethics
</div>
</div>

</section>
  );
}

export default Guidelines;
