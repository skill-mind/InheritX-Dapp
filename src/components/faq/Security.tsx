import FaqLayout from "./FaqLayout";

interface SecurityFaqProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const securityFaqs = [
  {
    id: 1,
    question: "How secure is the platform?",
    answer:
      "InheritX ensures top-tier security with multi-signature validation, time-locked smart contracts, and zero-knowledge proofs for privacy. We conduct regular third-party audits, support hardware wallet integration, and use advanced encryption to protect user assets.",
  },

  {
    id: 2,
    question: "What happens if I lose my credentials?",
    answer:
      "InheritX offers multiple recovery options, including an emergency contact system, multi-factor authentication backup, and recovery seed phrases. Users can also regain access through a designated guardian approval process or identity verification restoration.",
  },
  {
    id: 3,
    question: "Which wallets and assets are supported?",
    answer:
      "InheritX supports Argent X, Braavos, and other StarkNet-compatible wallets, along with cryptocurrencies, NFTs, and digital collectibles. We also enable cross-chain asset transfers through secure bridges, with plans to expand to additional asset types in the future.",
  },
];

export default function Security({
  activeTab,
  setActiveTab,
}: SecurityFaqProps) {
  return (
    <FaqLayout
      faqs={securityFaqs}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />
  );
}
