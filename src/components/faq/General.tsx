import FaqLayout from "./FaqLayout";

interface GeneralFaqProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const generalFaqs = [
  {
    id: 1,
    question: "What is InheritX?",
    answer:
      "InheritX is a decentralized digital asset inheritance platform built on StarkNet’s Layer 2 solution. We enable secure, automated transfer of cryptocurrencies and NFTs through smart contracts, providing a trustless solution for digital estate planning.",
  },
  {
    id: 2,
    question: "How does InheritX work?",
    answer:
      "InheritX is a decentralized digital asset inheritance platform built on StarkNet’s Layer 2 solution. We enable secure, automated transfer of cryptocurrencies and NFTs through smart contracts, providing a trustless solution for digital estate planning.",
  },
  {
    id: 3,
    question:
      "What makes InheritX different from traditional inheritance solutions?",
    answer:
      "InheritX leverages blockchain technology to ensure automated execution of inheritance plans through smart contracts, eliminating the need for intermediaries while maintaining decentralized security. Our platform provides transparent verification of inheritance conditions, enabling beneficiaries to access assets with complete trust. With cross-chain compatibility, users can secure and transfer various digital assets seamlessly. Additionally, immutable record-keeping ensures that all transactions and inheritance plans remain tamper-proof and permanently verifiable on the blockchain.",
  },
];

export default function General({ activeTab, setActiveTab }: GeneralFaqProps) {
  return (
    <FaqLayout
      faqs={generalFaqs}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />
  );
}
