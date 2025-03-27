import FaqLayout from "./FaqLayout";

interface AccountsFaqProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const accountFaqs = [
  {
    id: 1,
    question: "Can I modify my inheritance plan?",
    answer:
      "Active account holders can update beneficiary information, adjust asset allocation, modify time-lock periods, change security settings, and add or remove assets from their inheritance plan.",
    category: "Account",
  },
  {
    id: 2,
    question: "What happens to my plan if regulations change?",
    answer:
      "InheritX ensures regular compliance updates, automated policy adjustments, and user notifications of changes, while providing grace periods for plan updates and legal compliance support.",
    category: "Account",
  },
  {
    id: 3,
    question: "How are disputes handled?",
    answer:
      "InheritX’s dispute resolution process includes automated verification systems, a multi-step review process, third-party arbitration options, legal compliance verification, and transparent documentation for fair and secure conflict resolution.",
    category: "Account",
  },
];

const Accounts: React.FC<AccountsFaqProps> = ({ activeTab, setActiveTab }) => {
  return (
    <FaqLayout
      faqs={accountFaqs}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />
  );
};

export default Accounts;
