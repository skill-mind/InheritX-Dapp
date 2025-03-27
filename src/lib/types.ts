export type plansTableType = {
  planName: string;
  totalAssest: string;
  beneficiaries: string;
  timeLockStatus: string;
  action: string;
};

export type actionType = {
  title: string;
  paragraph: string;
  cancle: string;
  execute: string;
  modalHandle:()=>void
};

export interface Token {
  id: string;
  name: string;
  network: string;
  symbol: string;
  selected: boolean;
}

export interface NFT {
  id: string;
  name: string;
  icon: string;
  selected: boolean;
}

export interface Beneficiary {
  id: string;
  name: string;
  email: string;
  walletAddress: string;
  tokenAllocationType: "USDT" | "Percentage";
  tokenAllocationValue: string;
  nftAllocationType: "USDT" | "Percentage";
  nftAllocationValue: string;
  selectedNfts: string[];
  message: string;
}

export interface BeneficiaryShotDesc {
  id: string;
  name: string;
  selected: boolean;
}

export interface FileItem {
  id: string;
  name: string;
  size: number;
  type: string;
  recipients: string[];
}

export interface Condition {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}