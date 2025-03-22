import React from 'react'
import Notification from "../../../../public/svg/notification.svg";
import Avatar from "../../../../public/svg/Avatar.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Menu, X, Plus } from "lucide-react";
import Image from "next/image";
import { useWalletContext } from "../../useContext/WalletContext";


export default function AdminDashboardHeader() {
    const { account, disconnectWallet } = useWalletContext();

    return (
        <header className="flex justify-between items-center p-6">
            <h1 className="text-3xl font-semibold">Dashboard</h1>

            <div className="hidden lg:flex items-center gap-4 ">
                <Image
                    src={Notification}
                    width={40}
                    height={40}
                    className="text-white cursor-pointer "
                    alt="Notification"
                />

                <div
                    className="flex items-center gap-2 hover:bg-[#FFFFFF1A] bg-[#161716] p-2 rounded-full cursor-pointer border"
                    onClick={account ? disconnectWallet : undefined}
                >
                    <Image
                        src={Avatar}
                        width={25}
                        height={25}
                        className="rounded-full"
                        alt="Avatar"
                    />
                    <span className="text-sm text-[#F3F5FF]">
                        {account ? account : "Not connected"}
                    </span>
                    <Plus />
                    <MdOutlineKeyboardArrowDown />
                </div>
            </div>
        </header>

    )
}
