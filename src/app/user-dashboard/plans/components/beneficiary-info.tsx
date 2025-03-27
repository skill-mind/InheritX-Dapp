import { DocIcon, LinkIcon } from "@/svg/Icons";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function BasicInfo() {
  const [isOpen, setIsOpen] = useState(false);

  function isOpenhandle() {
    setIsOpen((prev) => !prev);
  }
  return (
    <>
      <div className="my-4 grid gap-3">
        <div className="border border-[#2B2A38] rounded-lg bg-[#2B2A38] flex justify-between items-center py-[14px] px-[20px]">
          <h3 className="font-normal text-xl">Plan Name</h3>
          <h5 className="text-sm font-light">Family Inheritance</h5>
        </div>
        <div className="border border-[#2B2A38] rounded-lg bg-[#2B2A38] flex justify-between items-center py-[14px] px-[20px] ">
          <h3 className="font-normal text-xl">Description</h3>
          <h5 className="text-sm font-light">For everyone dear to me</h5>
        </div>
        <div className="border border-[#2B2A38] rounded-lg bg-[#2B2A38] flex justify-between items-center py-[14px] px-[20px]">
          <h3 className="font-normal text-xl">Tokens Transferred</h3>
          <h5 className="text-sm font-light">STARK, USDT, USDC</h5>
        </div>
        <div className="border border-[#2B2A38] rounded-lg bg-[#2B2A38] flex justify-between items-center py-[14px] px-[20px]">
          <h3 className="font-normal text-xl">Transfer DateTransfer Date</h3>
          <h5 className="text-sm font-light">25-01-2025</h5>
        </div>
        <div className="border border-[#2B2A38] rounded-lg bg-[#2B2A38] flex justify-between items-center py-[14px] px-[20px]">
          <h3 className="font-normal text-xl">
            Inactivity activation criteria
          </h3>
          <h5 className="text-sm font-light">2 years</h5>
        </div>
        <div className="border border-[#2B2A38] rounded-lg bg-[#2B2A38] flex justify-between items-center py-[14px] px-[20px]">
          <h3 className="font-normal text-xl">Multi-Signature Approval</h3>
          <h5 className="text-sm font-light">Enabled</h5>
        </div>
        <div className="border border-[#2B2A38] rounded-lg bg-[#2B2A38] flex flex-col gap-4 py-[14px] px-[20px]">
          <div
            onClick={isOpenhandle}
            className="flex justify-between items-center"
          >
            <h3 className="font-normal text-xl">Beneficiaries (2)</h3>
            <h5 className="text-sm font-light flex items-center gap-2">
              Show Details{" "}
              <ChevronDown
                className={`${isOpen ? "rotate-180" : "rotate-0"}`}
              />
            </h5>
          </div>
          {isOpen && (
            <>
              <div className="bg-[#21202A] rounded-[20px] p-4 grid gap-2">
                <div className="rounded-lg flex justify-between items-center">
                  <h3 className="font-semibold text-base">Full Name</h3>
                  <h5 className="text-sm font-light">Daniel Ochoja</h5>
                </div>
                <div className="rounded-lg flex justify-between items-center">
                  <h3 className="font-semibold text-base">Email</h3>
                  <h5 className="text-sm font-light">danielochoja@gmail.com</h5>
                </div>
                <div className="rounded-lg flex justify-between items-center">
                  <h3 className="font-semibold text-base">Allocation</h3>
                  <h5 className="text-sm font-light">
                    50% (Approx. $25,213.44)
                  </h5>
                </div>
                <div className="rounded-lg flex justify-between items-center">
                  <h3 className="font-semibold text-base">Number of NFTs</h3>
                  <h5 className="text-sm font-light">2</h5>
                </div>
              </div>
              <div className="bg-[#21202A] rounded-[20px] p-4 grid gap-2">
                <div className="rounded-lg flex justify-between items-center">
                  <h3 className="font-semibold text-base">Full Name</h3>
                  <h5 className="text-sm font-light">Daniel Ochoja</h5>
                </div>
                <div className="rounded-lg flex justify-between items-center">
                  <h3 className="font-semibold text-base">Email</h3>
                  <h5 className="text-sm font-light">danielochoja@gmail.com</h5>
                </div>
                <div className="rounded-lg flex justify-between items-center">
                  <h3 className="font-semibold text-base">Allocation</h3>
                  <h5 className="text-sm font-light">
                    50% (Approx. $25,213.44)
                  </h5>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export function BeneficiaryInfo() {
  const [isOpen, setIsOpen] = useState(false);

  function isOpenhandle() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div className="border border-[#2B2A38] rounded-lg bg-[#2B2A38] flex flex-col gap-4 py-[14px] px-[20px]">
      <div onClick={isOpenhandle} className="flex justify-between items-center">
        <h3 className="font-normal text-xl">Beneficiaries (2)</h3>
        <h5 className="text-sm font-light flex items-center gap-2">
          Show Details{" "}
          <ChevronDown className={`${isOpen ? "rotate-180" : "rotate-0"}`} />
        </h5>
      </div>
      {isOpen && (
        <>
          <div className="bg-[#21202A] rounded-[20px] p-4 grid gap-2">
            <div className="rounded-lg flex justify-between items-center">
              <h3 className="font-semibold text-base">Full Name</h3>
              <h5 className="text-sm font-light">Daniel Ochoja</h5>
            </div>
            <div className="rounded-lg flex justify-between items-center">
              <h3 className="font-semibold text-base">Email</h3>
              <h5 className="text-sm font-light">danielochoja@gmail.com</h5>
            </div>
            <div className="rounded-lg flex justify-between items-center">
              <h3 className="font-semibold text-base">Allocation</h3>
              <h5 className="text-sm font-light">50% (Approx. $25,213.44)</h5>
            </div>
            <div className="rounded-lg flex justify-between items-center">
              <h3 className="font-semibold text-base">Number of NFTs</h3>
              <h5 className="text-sm font-light">2</h5>
            </div>
          </div>
          <div className="bg-[#21202A] rounded-[20px] p-4 grid gap-2">
            <div className="rounded-lg flex justify-between items-center">
              <h3 className="font-semibold text-base">Full Name</h3>
              <h5 className="text-sm font-light">Daniel Ochoja</h5>
            </div>
            <div className="rounded-lg flex justify-between items-center">
              <h3 className="font-semibold text-base">Email</h3>
              <h5 className="text-sm font-light">danielochoja@gmail.com</h5>
            </div>
            <div className="rounded-lg flex justify-between items-center">
              <h3 className="font-semibold text-base">Allocation</h3>
              <h5 className="text-sm font-light">50% (Approx. $25,213.44)</h5>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export function CustomMedia(){
  return (
    <div className="bg-[#16151C] py-4 px-[14px] rounded-xl">
      <div className="bg-[#363546] flex justify-between items-center rounded-xl px-3 py-[8px]">
        <div className=" flex justify-between items-center gap-3">
          <DocIcon />
          <div className=" flex justify-between items-start flex-col">
            <span>File 1</span>
            <span>tribute_and_instructions.mp4</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span>Preview</span>
          <LinkIcon />
        </div>
      </div>
      <div className="text-start grid gap-3 mt-5">
        <h3 className="text-lg font-normal">Recipients</h3>
        <div className="flex items-center gap-3">
          <div className="text-black bg-white rounded-full py-1 px-2">
            Daniel Ochoja
          </div>
          <div className="text-black bg-white rounded-full py-1 px-2">
            Stephen Jack
          </div>
        </div>
      </div>
    </div>
  );
}

export function MeadiaAndBeneficial() {
  return (
    <div className="flex justify-between gap-3 flex-col">
      <CustomMedia />
      <CustomMedia />
      <CustomMedia />
    </div>
  );
}