"use client";
import { useState, JSX } from "react";
import Image from "next/image";
import bitcoinIcon from "../../../../../public/svg/bitcoin.svg";
import clockIcon from "../../../../../public/svg/plansIcon.svg";
import peopleIcon from "../../../../../public/svg/people.svg";
import ClaimForm from "../component/ClaimForm";
import ClaimList from "../component/ClaimList";
import ClaimModal from "../component/ClaimModal";
import AcceptedModal from "../component/AcceptedModal";
import { ClaimStatCard } from "../component/ClaimStatCard";
import checkCicle from "../../../../../public/modalIcon/checkCircle.svg";
import warningIcon from "../../../../../public/modalIcon/Warning.svg";
import hourglassIcon from "../../../../../public/modalIcon/hourGlassIcon.svg";
import { DirectionAnimation } from "@/motion/Animation";
import WithdrawalModal from "@/components/WithdrawalModal";

interface Claim {
  id: number;
  date: string;
  assetsOwner: string;
  assets: string;
  status: "Accepted" | "Pending" | "Rejected";
  action: string;
}

interface ModalMessage {
  title: string;
  message: string;
  icon: JSX.Element;
}

const dummyClaims: Claim[] = [
  {
    id: 1,
    date: "24-01-2025",
    assetsOwner: "Daniel Ochoja",
    assets: "Token NFTs",
    status: "Accepted",
    action: "view",
  },
  {
    id: 2,
    date: "24-01-2025",
    assetsOwner: "jasper Stone Lakeview",
    assets: "Token",
    status: "Pending",
    action: "claim",
  },
  {
    id: 3,
    date: "24-01-2025",
    assetsOwner: "jasper Stone Lakeview",
    assets: "Token",
    status: "Rejected",
    action: "view",
  },
];

const modalMessages = {
  Submitted: {
    title: "Claim Request Received",
    message:
      "Your submissions have been received! We’re reviewing them and will update you shortly. Check your email or dashboard for status updates.",
    icon: (
      <Image src={checkCicle} alt="Claim Submitted" height={154} width={154} />
    ),
  },
  Pending: {
    title: "Claim Pending",
    message:
      "Claim under review, please check your mailbox and dashboard regularly for status updates.",
    icon: (
      <Image
        src={hourglassIcon}
        alt="Claim Submitted"
        height={154}
        width={154}
      />
    ),
  },
  Rejected: {
    title: "Invalid Claim Code",
    message:
      "Claim code is not associated with your account or does not exist. Please check claim code and try again",
    icon: (
      <Image src={warningIcon} alt="Claim Submitted" height={154} width={154} />
    ),
  },
  Accepted: {
    title: "Claim Request Received ",
    message:
      "Your submissions have been received! We’re reviewing them and will update you shortly. Check your email or dashboard for status updates.",
    icon: (
      <Image src={checkCicle} alt="Claim Submitted" height={154} width={154} />
    ),
  },
  Sucessful: {
    title: "Withdrawal Successful",
    message: "25,002.45 STRK has been successfully transferred to your wallet.",
    icon: (
      <Image src={checkCicle} alt="Claim Submitted" height={154} width={154} />
    ),
  },
};

function Claims() {
  // Start with empty claims
  const [claims, setClaims] = useState<Claim[]>([]);
  const [selectedClaim, setSelectedClaim] = useState<Claim | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<ModalMessage | null>(null);
  const [isAcceptedModalOpen, setIsAcceptedModalOpen] = useState(false);
  const [isWithdrawalModalOpen, setIsWithdrawalModalOpen] = useState(false);

  const claimedCount = claims.filter(
    (claim) => claim.status === "Accepted"
  ).length;
  const unclaimedCount = claims.filter(
    (claim) => claim.status !== "Accepted"
  ).length;

  const handleClaimSubmission = (claimCode: string) => {
    console.log("Claim submitted with code:", claimCode);

    // Check if code is 666
    if (claimCode === "666") {
      setModalData(modalMessages.Pending);
      setIsModalOpen(true);
      setClaims(dummyClaims);
      return;
    }

    // Check if code is only one letter
    if (claimCode.length < 2) {
      setModalData(modalMessages.Rejected);
      setIsModalOpen(true);
      return;
    }

    // Valid code - add the dummy claims and show success modal
    setClaims(dummyClaims);
    setModalData(modalMessages.Accepted);
    setIsModalOpen(true);
  };

  const handleViewClaim = (claim: Claim) => {
    setSelectedClaim(claim);
    if (claim.status === "Accepted") {
      setIsAcceptedModalOpen(true);
    } else {
      setModalData(modalMessages[claim.status]);
      setIsModalOpen(true);
    }
  };

  const handleWithdrawFunds = () => {
    setIsWithdrawalModalOpen(true);
  };

  const handleWithdrawalSubmit = (amount: string) => {
    setIsWithdrawalModalOpen(false);
    setModalData(modalMessages.Sucessful);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedClaim(null);
    setModalData(null);
  };

  const stats = [
    {
      value: "$452.35",
      icon: <Image src={bitcoinIcon} alt="Assets" height={20} width={20} />,
      label: "Total amount of claimed assets",
    },
    {
      value: claimedCount.toString(),
      icon: <Image src={clockIcon} alt="Assets" height={20} width={20} />,
      label: "Claimed Inheritance",
    },
    {
      value: unclaimedCount.toString(),
      icon: <Image src={peopleIcon} alt="Assets" height={20} width={20} />,
      label: "Unclaimed Inheritance",
    },
  ];

  return (
    <main className="flex-1 px-2 md:px-8 pb-8 pt-2 mt-2 mb-4 overflow-scroll scrollbar-hide w-full">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${
          stats.length > 0 ? "4" : "3"
        } gap-6 `}
      >
        {stats.map((stat, index) => (
          <ClaimStatCard key={index} {...stat} />
        ))}
        {stats.length > 0 && (
          <ClaimStatCard
            isAction={true}
            actionText="Withdraw Funds"
            onAction={handleWithdrawFunds}
          />
        )}
      </div>

      <DirectionAnimation delay={0.2}>
        <ClaimForm onClaimSubmit={handleClaimSubmission} />
      </DirectionAnimation>

      {claims.length > 0 ? (
        <DirectionAnimation>
          <ClaimList claims={claims} onViewClaim={handleViewClaim} />
        </DirectionAnimation>
      ) : (
        <DirectionAnimation delay={0.4}>
          <div className="mt-14 bg-gradient-to-b from-[#4F4E4F]/50 to-[#413F54]/10 h-[292px] rounded-[20px] p-8 text-center">
            <h2 className="text-white text-[28px] font-medium mb-2 w-full text-left">
              Claims
            </h2>
            <p className="text-white text-[32px] h-full flex items-center justify-center font-bold mb-2">
              No Claims Yet, Enter Claim Code to Claim Inheritance
            </p>
          </div>
        </DirectionAnimation>
      )}

      {isModalOpen && modalData && (
        <ClaimModal modalData={modalData} onClose={closeModal} />
      )}
      {isAcceptedModalOpen && selectedClaim && (
        <AcceptedModal
          isOpen={isAcceptedModalOpen}
          onClose={() => setIsAcceptedModalOpen(false)}
        />
      )}
      {isWithdrawalModalOpen && (
        <WithdrawalModal
          isOpen={isWithdrawalModalOpen}
          onClose={() => setIsWithdrawalModalOpen(false)}
          onSubmit={handleWithdrawalSubmit}
        />
      )}
    </main>
  );
}

export default Claims;
