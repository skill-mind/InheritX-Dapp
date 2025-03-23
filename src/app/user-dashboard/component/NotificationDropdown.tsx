"use client";

import React, { useState, useRef, useEffect, useContext } from "react";
import Link from "next/link";
import { UserCircle2 } from "lucide-react";
import { DashBoardContext } from "@/app/useContext/dashboardContext";

interface NotificationMessageProp {
  id: number;
  message: string;
  time: string;
  read: boolean;
}

interface NotificationDropdownProp {
  isOpen: boolean;
  setIsNotificationOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
  notificationMessages?: NotificationMessageProp[];
}

const mockNotificationMessages: NotificationMessageProp[] = [
  {
    id: 1,
    message:
      "KYC submission received and is under review, please check your mail for status updates",
    time: "Now",
    read: false,
  },
  {
    id: 2,
    message:
      "KYC submission received and is under review, please check your mail for status updates",
    time: "Now",
    read: false,
  },
  {
    id: 3,
    message:
      "KYC submission rejected. Name on profile and means of identity do not match. Please restart verification",
    time: "July 25th",
    read: false,
  },
  {
    id: 4,
    message:
      "KYC submission received and is under review, please check your mail for status updates",
    time: "Now",
    read: false,
  },
];

function NotificationDropdown({
  isOpen,
  setIsNotificationOpen,
  onClose,
  notificationMessages = mockNotificationMessages,
}: NotificationDropdownProp) {
  const { setActiveSection } = useContext(DashBoardContext);

  const [notifications, setNotifications] =
    useState<NotificationMessageProp[]>(notificationMessages);

  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notif: NotificationMessageProp) => ({
        ...notif,
        read: true,
      }))
    );
  };

  return (
    <div
      ref={dropdownRef}
      className={`absolute -right-[12rem] top-14 bg-[#08080F] rounded-xl w-[350px] shadow-lg z-50 border border-[#807F8D] transition-all duration-200 ease-in-out ${
        isOpen
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 -translate-y-2 invisible"
      }`}
    >
      {isOpen && (
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-normal text-white">Notifications</h2>
            <button
              onClick={markAllAsRead}
              className="text-white text-xs hover:underline focus:outline-none"
            >
              Mark all as read
            </button>
          </div>

          <div className="space-y-2">
            {notifications.slice(0, 4).map((notification) => (
              <div
                key={notification.id}
                className="py-2 border-b border-[#807F8D] last:border-b-0"
              >
                <div className="flex gap-3">
                  <div className="mt-1">
                    <UserCircle2 size={24} className="text-white" />
                  </div>
                  <div className="flex-1 text-xs">
                    <p className="text-white text-xs">{notification.message}</p>
                  </div>
                  <div className="text-right min-w-[40px]">
                    <span className="text-gray-400 text-xs">
                      {notification.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2 flex justify-end">
            <button
              onClick={() => {
                setActiveSection("notification");
                setIsNotificationOpen(false);
              }}
              className="bg-[#2D0F5B] border border-[#C0BFC6] text-white text-xs px-6 py-1 rounded-full hover:bg-[#3A1473] transition-colors"
            >
              View All
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationDropdown;
