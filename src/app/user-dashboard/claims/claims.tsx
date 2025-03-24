"use client";
import { useState, JSX } from "react";
import Image from "next/image";
import bitcoinIcon from "../../../../public/svg/bitcoin.svg"
import clockIcon from "../../../../public/svg/plansIcon.svg"
import peopleIcon from "../../../../public/svg/people.svg"
import ClaimForm from "../component/ClaimForm";
import ClaimList from "../component/ClaimList"
import { CircleCheck } from 'lucide-react';
import { TriangleAlert } from 'lucide-react';
import { Hourglass } from 'lucide-react';
import ClaimModal from "../component/ClaimModal";
import AcceptedModal from '../component/AcceptedModal'
import {ClaimStatCard} from '../component/ClaimStatCard'


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
        action: "view" 
    },

    { 
        id: 2, 
        date: "24-01-2025", 
        assetsOwner: "jasper Stone Lakeview", 
        assets: "Token", 
        status: "Pending", 
        action: "claim" 
    },

    { 
        id: 3, 
        date: "24-01-2025", 
        assetsOwner: "jasper Stone Lakeview", 
        assets: "Token", 
        status: "Rejected", 
        action: "view" 
    }
];

const modalMessages = {
    Submitted: {
      title: "Claim Request Recieved",
      message: "Your Sumbmissions have been recieved! We're reviewing them and will update you shortly. Check your email or dashboard for status updates",
      icon: <CircleCheck className="text-green-500"   size={100} />,
    },
    Pending: {
      title: "Claim Pending",
      message: "Claim under review, please check your mailbox and dashboard regularly for status updates.",
      icon: <TriangleAlert className="text-white"  size={100}/>,
    },
    Rejected: {
      title: "Invalid Claim Code",
      message: "Claim code is not associated with your account or does not exist. Please check claim code and try again", 
      icon: <Hourglass className="text-white" size={100}/>,
    },
    Accepted: {
      title: "Claim Accepted",
      message: "Your claim has been accepted. Please check your email or dashboard for further details.",
      icon: <CircleCheck className="text-green-500" size={100} />,
    },
  };

function Claims (){ 
    const [claims, setClaims] = useState(dummyClaims);
    const [selectedClaim, setSelectedClaim] = useState<Claim | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState<ModalMessage | null>(null);
    const [isAcceptedModalOpen, setIsAcceptedModalOpen] = useState(false); 


    const claimedCount = claims.filter((claim) => claim.status === "Accepted").length;
    const unclaimedCount = claims.filter((claim) => claim.status !== "Accepted").length;


    const handleClaimSubmission = (claimCode: string) => {
        console.log("Claim submitted with code:", claimCode);
        setModalData(modalMessages.Submitted);
        setIsModalOpen(true);
       
    };

    const handleViewClaim = (claims: Claim) => {
        setSelectedClaim(claims); 
        if (claims.status === "Accepted") {
            setIsAcceptedModalOpen(true); 
        } else {
            setModalData(modalMessages[claims.status]); 
            setIsModalOpen(true);
        }
        
    };

    const closeModal = () => {
    setIsModalOpen(false);
    setSelectedClaim(null);
    setModalData(null);
    };


    const Stat = [
        {
            value: "$0.00",
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
    ]

    return(
        <main className="flex-1 px-2 md:px-8 pb-8 pt-2 mt-2 mb-4 overflow-scroll scrollbar-hide w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Stat.map((stat, index) => (
                        <ClaimStatCard key={index} {...stat} />
                 ))}
            </div>
            <ClaimForm onClaimSubmit={handleClaimSubmission}/>
            <ClaimList claims={claims} onViewClaim={handleViewClaim} />
            {isModalOpen && <ClaimModal modalData={modalData} onClose={closeModal} />}
            
            {isAcceptedModalOpen && selectedClaim && (
            <AcceptedModal 
                isOpen={isAcceptedModalOpen} 
                
                onClose={() => setIsAcceptedModalOpen(false)} 
            />
            )}
        </main>
    )
}

export default Claims;