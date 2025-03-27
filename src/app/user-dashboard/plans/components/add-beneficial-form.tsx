"use client";

import type React from "react";

import { useState } from "react";
import { Check, ChevronDown, Plus, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AddUserIcon, RemoveUserIcon } from "@/svg/Icons";
import { Beneficiary, NFT } from "@/lib/types";



export default function BeneficiaryForm() {
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([
    {
      id: "1",
      name: "",
      email: "",
      walletAddress: "",
      tokenAllocationType: "USDT",
      tokenAllocationValue: "",
      nftAllocationType: "USDT",
      nftAllocationValue: "",
      selectedNfts: [],
      message: "",
    },
  ]);

  const [nfts, setNfts] = useState<NFT[]>([
    { id: "1", name: "Stark_67h32", icon: "🔴", selected: false },
    { id: "2", name: "TPOD", icon: "🟣", selected: false },
    { id: "3", name: "Stark_neon225", icon: "🔵", selected: false },
    { id: "4", name: "CryptoPunk #3442", icon: "🟢", selected: false },
  ]);

  const [nftDropdownOpen, setNftDropdownOpen] = useState<{
    [key: string]: boolean;
  }>({});
  const [nftSearchQuery, setNftSearchQuery] = useState("");

  const handleInputChange = (
    beneficiaryId: string,
    field: keyof Beneficiary,
    value: string
  ) => {
    setBeneficiaries(
      beneficiaries.map((b) =>
        b.id === beneficiaryId ? { ...b, [field]: value } : b
      )
    );
  };

  const handleAllocationType = (
    beneficiaryId: string,
    field: "tokenAllocationType" | "nftAllocationType",
    type: "USDT" | "Percentage"
  ) => {
    setBeneficiaries(
      beneficiaries.map((b) =>
        b.id === beneficiaryId
          ? { ...b, [field]: type, [`${field.replace("Type", "Value")}`]: "" }
          : b
      )
    );
  };

  const toggleNftSelection = (beneficiaryId: string, nftId: string) => {
    // Create a copy of the NFTs array to modify
    const updatedNfts = [...nfts];
    const nftIndex = updatedNfts.findIndex((nft) => nft.id === nftId);

    if (nftIndex !== -1) {
      // Toggle the selected state for this NFT
      updatedNfts[nftIndex] = {
        ...updatedNfts[nftIndex],
        selected: !updatedNfts[nftIndex].selected,
      };
      setNfts(updatedNfts);

      // Update the beneficiary's selected NFTs
      setBeneficiaries(
        beneficiaries.map((b) => {
          if (b.id === beneficiaryId) {
            const isSelected = updatedNfts[nftIndex].selected;
            let newSelectedNfts = [...b.selectedNfts];

            if (isSelected && !newSelectedNfts.includes(nftId)) {
              newSelectedNfts.push(nftId);
            } else if (!isSelected && newSelectedNfts.includes(nftId)) {
              newSelectedNfts = newSelectedNfts.filter((id) => id !== nftId);
            }

            return { ...b, selectedNfts: newSelectedNfts };
          }
          return b;
        })
      );
    }
  };

  const filteredNfts = nfts.filter((nft) =>
    nft.name.toLowerCase().includes(nftSearchQuery.toLowerCase())
  );

  const addBeneficiary = () => {
    const newId = (
      Number.parseInt(beneficiaries[beneficiaries.length - 1].id) + 1
    ).toString();
    setBeneficiaries([
      ...beneficiaries,
      {
        id: newId,
        name: "",
        email: "",
        walletAddress: "",
        tokenAllocationType: "USDT",
        tokenAllocationValue: "",
        nftAllocationType: "USDT",
        nftAllocationValue: "",
        selectedNfts: [],
        message: "",
      },
    ]);
  };

  const removeBeneficiary = (id: string) => {
    if (beneficiaries.length > 1) {
      setBeneficiaries(beneficiaries.filter((b) => b.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ beneficiaries });
    // Here you would handle the form submission
  };

  const toggleNftDropdown = (beneficiaryId: string, isOpen: boolean) => {
    setNftDropdownOpen({
      ...nftDropdownOpen,
      [beneficiaryId]: isOpen,
    });
  };

  return (
    <>
      <div className="flex justify-start gap-4 items-center ml-6">
        <h3>
          Total Value in Tokens:{" "}
          <span className="text-[#100033]">$26,459.27</span>
        </h3>
        <h3 className="font-normal text-base">
          Total Number of NFTs: <span className="text-[#100033]">4</span>
        </h3>
      </div>
      <form onSubmit={handleSubmit} className="space-y-2">
        {beneficiaries.map((beneficiary, index) => (
          <div key={beneficiary.id} className="p-4 space-y-4">
            {beneficiaries.length > 1 && (
              <div className="flex justify-end mb-2">
                <Button
                  type="button"
                  onClick={() => removeBeneficiary(beneficiary.id)}
                  className="flex items-center gap-1 bg-[#CF3926] hover:bg-[#CF3926] border border-[#C0BFC6] rounded-full text-white px-3 py-1 text-xs"
                >
                  Remove Beneficiary <RemoveUserIcon />
                </Button>
              </div>
            )}

            <div className="bg-[#2B2A38] rounded-2xl py-[25px] px-5 grid gap-5">
              <div>
                <label
                  htmlFor={`name-${beneficiary.id}`}
                  className="text-sm text-white font-normal  block mb-1"
                >
                  Beneficiary Name (As appears on E-mail)
                </label>
                <Input
                  id={`name-${beneficiary.id}`}
                  value={beneficiary.name}
                  onChange={(e) =>
                    handleInputChange(beneficiary.id, "name", e.target.value)
                  }
                  placeholder="Beneficiary Name"
                  className="bg-[#21202A] border-[#D9D9DD] border text-white h-[54px] rounded-2xl"
                />
              </div>

              <div>
                <label
                  htmlFor={`email-${beneficiary.id}`}
                  className="text-sm text-white font-normal  block mb-1"
                >
                  Beneficiary Email
                </label>
                <Input
                  id={`email-${beneficiary.id}`}
                  type="email"
                  value={beneficiary.email}
                  onChange={(e) =>
                    handleInputChange(beneficiary.id, "email", e.target.value)
                  }
                  placeholder="Beneficiary Email"
                  className="bg-[#21202A] border-[#D9D9DD] border text-white h-[54px] rounded-2xl"
                />
              </div>

              <div>
                <label
                  htmlFor={`wallet-${beneficiary.id}`}
                  className="text-sm text-white font-normal  block mb-1"
                >
                  Wallet Address
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-xs text-white">S</span>
                    </div>
                  </div>
                  <Input
                    id={`wallet-${beneficiary.id}`}
                    value={beneficiary.walletAddress}
                    onChange={(e) =>
                      handleInputChange(
                        beneficiary.id,
                        "walletAddress",
                        e.target.value
                      )
                    }
                    placeholder="Beneficiary wallet address"
                    className="bg-[#21202A] border-[#D9D9DD] border text-white h-[54px] rounded-2xl"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-white font-normal block mb-1">
                  Allocation (USDT)
                </label>
                <div className="sm:flex sm:gap-3">
                  <div className="flex gap-2 mb-2">
                    <button
                      type="button"
                      className="p-2 rounded-2xl text-sm  border border-[#D9D9DD] 
                       bg-[#413F54] text-white h-[54px]"
                      onClick={() =>
                        handleAllocationType(
                          beneficiary.id,
                          "tokenAllocationType",
                          "USDT"
                        )
                      }
                    >
                      USDT
                    </button>
                    <button
                      type="button"
                      className="px-3 py-2 rounded-2xl text-sm  border-[3px] border-[#D9D9DD] 
                       bg-[#21202A] text-white h-[54px]"
                      onClick={() =>
                        handleAllocationType(
                          beneficiary.id,
                          "tokenAllocationType",
                          "Percentage"
                        )
                      }
                    >
                      Percentage (%)
                    </button>
                    {beneficiary.tokenAllocationType === "Percentage" && (
                      <div className="flex items-center ml-auto">
                        <span className="text-xs text-gray-400">
                          Approx USDT:
                        </span>
                        <span className="text-xs ml-1">$0</span>
                      </div>
                    )}
                  </div>
                  <Input
                    value={beneficiary.tokenAllocationValue}
                    onChange={(e) =>
                      handleInputChange(
                        beneficiary.id,
                        "tokenAllocationValue",
                        e.target.value
                      )
                    }
                    placeholder={
                      beneficiary.tokenAllocationType === "Percentage"
                        ? "How many percent of tokens do you want to allocate"
                        : "Enter USDT amount"
                    }
                    className="bg-[#21202A] border-[#D9D9DD] border text-white h-[54px] rounded-2xl"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor={`nft-${beneficiary.id}`}
                  className="text-sm text-white font-normal  block mb-1"
                >
                  NFT (Optional)
                </label>
                <Popover
                  open={nftDropdownOpen[beneficiary.id]}
                  onOpenChange={(isOpen) =>
                    toggleNftDropdown(beneficiary.id, isOpen)
                  }
                >
                  <PopoverTrigger asChild>
                    <div className="relative">
                      <div className="bg-[#21202A] border-[#D9D9DD] border text-white h-[54px] rounded-2xl flex">
                        {beneficiary.selectedNfts.length > 0 ? (
                          nfts
                            .filter((nft) =>
                              beneficiary.selectedNfts.includes(nft.id)
                            )
                            .map((nft) => (
                              <div
                                key={nft.id}
                                className="flex items-center gap-1.5 rounded-md px-2 py-1"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleNftSelection(beneficiary.id, nft.id);
                                }}
                              >
                                <span>{nft.icon}</span>
                                <span>{nft.name}</span>
                              </div>
                            ))
                        ) : (
                          <span className="text-gray-400 my-auto px-3">
                            Select one or more NFTs to transfer
                          </span>
                        )}
                        <ChevronDown className="ml-auto h-4 w-4 self-center text-gray-400" />
                      </div>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 bg-gray-800 border-gray-700 text-white">
                    <div className="p-2 w-full">
                      <div className="flex items-center border border-gray-700 rounded-md px-3 py-2 mb-2">
                        <Search className="h-4 w-4 mr-2 text-gray-400" />
                        <Input
                          placeholder="Search for NFTs"
                          value={nftSearchQuery}
                          onChange={(e) => setNftSearchQuery(e.target.value)}
                          className="border-0 bg-transparent p-0 text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </div>
                      <div className="text-xs text-gray-400 px-2 py-1">
                        All NFTs
                      </div>
                      <div className="max-h-60 overflow-auto">
                        {filteredNfts.map((nft) => (
                          <div
                            key={nft.id}
                            className="flex items-center justify-between px-2 py-2 cursor-pointer hover:bg-gray-700 rounded-md"
                            onClick={() =>
                              toggleNftSelection(beneficiary.id, nft.id)
                            }
                          >
                            <div className="flex items-center">
                              <span className="text-lg mr-2">{nft.icon}</span>
                              <div className="text-sm font-medium">
                                {nft.name}
                              </div>
                            </div>
                            {beneficiary.selectedNfts.includes(nft.id) && (
                              <Check className="h-4 w-4 text-green-500" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <label
                  htmlFor={`message-${beneficiary.id}`}
                  className="text-sm text-white font-normal  block mb-1"
                >
                  Additional Message (Optional)
                </label>
                <Textarea
                  id={`message-${beneficiary.id}`}
                  value={beneficiary.message}
                  onChange={(e) =>
                    handleInputChange(beneficiary.id, "message", e.target.value)
                  }
                  placeholder="Write a short message to beneficiary"
                  className="bg-[#21202A] border-[#D9D9DD] border text-white min-h-[100px] rounded-2xl"
                />
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-start ml-4">
          <Button
            type="button"
            onClick={addBeneficiary}
            className="flex items-center gap-1 bg-white border border-[#C0BFC6] rounded-full text-black hover:bg-white px-3 py-1 text-sm"
          >
            Add Beneficiary <AddUserIcon />
          </Button>
        </div>
      </form>
    </>
  );
}
