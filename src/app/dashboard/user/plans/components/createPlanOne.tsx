"use client";

import type React from "react";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SelectorInput from "./selector-input";

interface Token {
  id: string;
  name: string;
  network: string;
  symbol: string;
  selected: boolean;
}

export default function InheritancePlanFormOne() {
  const [planName, setPlanName] = useState("");
  const [description, setDescription] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [tokens, setTokens] = useState<Token[]>([
    {
      id: "1",
      name: "STARK",
      network: "Ethereum",
      symbol: "STARK",
      selected: true,
    },
    { id: "2", name: "USDC", network: "Solr", symbol: "USDC", selected: true },
    {
      id: "3",
      name: "ETH",
      network: "Ethereum",
      symbol: "ETH",
      selected: false,
    },
    {
      id: "4",
      name: "USDT",
      network: "Solana",
      symbol: "USDT",
      selected: false,
    },
    { id: "5", name: "SOL", network: "Solana", symbol: "SOL", selected: false },
  ]);

  const toggleTokenSelection = (id: string) => {
    setTokens(
      tokens.map((token) =>
        token.id === id ? { ...token, selected: !token.selected } : token
      )
    );
  };

  const filteredTokens = tokens.filter(
    (token) =>
      token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.network.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedTokens = tokens.filter((token) => token.selected);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      planName,
      description,
      selectedTokens: tokens.filter((token) => token.selected),
    });
    // Here you would handle the form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="planName" className="text-sm">
            Plan Name
          </label>
          <Input
            id="planName"
            value={planName}
            onChange={(e) => setPlanName(e.target.value)}
            placeholder="Give your inheritance plan a name"
            className="bg-[#21202A] border-[#D9D9DD] border text-white h-[54px] rounded-2xl"
          />
        </div>

        <SelectorInput/>

        <div className="space-y-2">
          <label htmlFor="description" className="text-sm">
            Description (Optional)
          </label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write a short description"
            className="bg-[#21202A] border-[#D9D9DD] border text-white min-h-[100px] rounded-2xl"
          />
        </div>
      </div>
    </form>
  );
}
