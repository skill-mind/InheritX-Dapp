"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PopoverContent } from "@/components/ui/popover";
import { Token } from "@/lib/types";
import { TokenIcon } from "@/svg/tokenSvg";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { Check, ChevronDown, Search, X } from "lucide-react";
import { useState } from "react";

export default function SelectorInput() {
    const [planName, setPlanName] = useState("");
    const [description, setDescription] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const [tokens, setTokens] = useState<Token[]>([
      {
        id: "1",
        name: "STARK",
        network: "Ethereum",
        symbol: "STARK",
        selected: true,
      },
      {
        id: "2",
        name: "USDC",
        network: "Solr",
        symbol: "USDC",
        selected: true,
      },
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
      {
        id: "5",
        name: "SOL",
        network: "Solana",
        symbol: "SOL",
        selected: false,
      },
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
    <div className="space-y-2 ">
      <label htmlFor="tokenSelect" className="text-sm">
        Select Token for Transfer
      </label>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <div className="relative">
            {selectedTokens.length > 0 ? (
              <div className="w-full rounded-2xl px-3 py-2 text-sm flex flex-wrap gap-2 bg-[#21202A] border-[#D9D9DD] border text-white h-[54px] relative">
                {selectedTokens.map((token) => (
                  <div
                    key={token.id}
                    className="flex items-center gap-1.5 bg-gray-700 rounded-md px-2 py-1"
                  >
                    <TokenIcon symbol={token.symbol} size="sm" />
                    <span>{token.name}</span>
                    <X
                      className="h-3.5 w-3.5 cursor-pointer text-gray-400 hover:text-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTokenSelection(token.id);
                      }}
                    />
                  </div>
                ))}
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-6 text-gray-400 hover:text-white hover:bg-transparent absolute right-2 top-2"
                  onClick={() => setIsOpen(true)}
                >
                  <ChevronDown className="h-4 w-4 " />
                </Button>
              </div>
            ) : (
              <Button
                id="tokenSelect"
                variant="outline"
                role="combobox"
                aria-expanded={isOpen}
                className="w-full justify-between bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                onClick={() => setIsOpen(true)}
              >
                <span className="text-gray-400">
                  Choose the tokens you want to transfer to beneficiaries
                </span>
                <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 bg-[#363546] text-white sm:min-w-[550px]">
          <div className="p-2">
            <div className="flex items-center border border-gray-700 rounded-md px-3 py-2 mb-2">
              <Search className="h-4 w-4 mr-2 text-gray-400" />
              <Input
                placeholder="Search for tokens"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-0 bg-transparent p-0 text-sm focus-visible:ring-0 focus-visible:ring-offset-0 rounded-2xl"
              />
            </div>
            <div className="text-xs text-gray-400 px-2 py-1">All Tokens</div>
            <div className="max-h-60 overflow-auto">
              {filteredTokens.map((token) => (
                <div
                  key={token.id}
                  className="flex items-center justify-between px-2 py-2 cursor-pointer hover:bg-gray-700 rounded-md"
                  onClick={() => toggleTokenSelection(token.id)}
                >
                  <div className="flex items-center">
                    <TokenIcon symbol={token.symbol} />
                    <div className="ml-2">
                      <div className="text-sm font-medium">{token.name}</div>
                      <div className="text-xs text-gray-400">
                        {token.network}
                      </div>
                    </div>
                  </div>
                  {token.selected && (
                    <Check className="h-4 w-4 text-green-500" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
