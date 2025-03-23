"use client";

import { useState } from "react";
import Image from "next/image";
import { UserCircle2 } from "lucide-react";

interface Notification{
    id: number;
    category: string;
    time: string;
    message: string;
    read: boolean;
    icon: string;
}

function Notification() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      category: "Profile and KYC",
      time: "1h ago",
      message: "KYC submission received and is under review. Please check your email regularly for updates",
      read: false,
      icon: "profile"
    },
    {
      id: 2,
      category: "Profile and KYC",
      time: "1h ago",
      message: "KYC submission received and is under review. Please check your email regularly for updates",
      read: false,
      icon: "profile"
    },
    {
      id: 3,
      category: "Profile and KYC",
      time: "1h ago",
      message: "KYC submission rejected. Name on profile and means of identity do not match. Please restart verification process.",
      read: false,
      icon: "profile"
    },
    {
      id: 4,
      category: "Claims",
      time: "Yesterday",
      message: "Claim request validated. Check your wallet for changes and claims page to view claim details.",
      read: false,
      icon: "claims"
    },
    {
      id: 5,
      category: "Claims",
      time: "Yesterday",
      message: "Claim request received and is under review. Please check your email regularly for updates.",
      read: false,
      icon: "claims"
    },
    {
      id: 6,
      category: "Claims",
      time: "Yesterday",
      message: "You have unclaimed inheritance. Please check your email for your claim code",
      read: false,
      icon: "claims"
    }
  ]);

  const unreadCount = notifications.filter((notif: Notification) => !notif.read).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map((notif: Notification) => ({ ...notif, read: true })));
  };

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notif: Notification) => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  // Group notifications by date
  const today = notifications.filter(notif => notif.time.includes("h ago") || notif.time === "Now");
  const yesterday = notifications.filter(notif => notif.time === "Yesterday");
  const older = notifications.filter(notif => 
    !notif.time.includes("h ago") && notif.time !== "Now" && notif.time !== "Yesterday"
  );

  return (
    <div className="bg-black text-white min-h-screen px-4 sm:px-6 md:px-8 py-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-manrope text-base font-normal leading-none tracking-normal">
            You have {unreadCount} Unread Notification{unreadCount !== 1 ? 's' : ''}
          </h1>
          <button 
            onClick={markAllAsRead}
            className="bg-white text-black  underline px-4 py-2 rounded-full text-sm hover:bg-opacity-20 transition-all"
          >
            Mark all as read
          </button>
        </div>

        {/* Today's notifications */}
        {today.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg text-gray-400 mb-4">Today</h2>
            <div className="space-y-3">
              {today.map(notification => (
                <NotificationCard 
                  key={notification.id} 
                  notification={notification}
                  onView={() => markAsRead(notification.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Yesterday's notifications */}
        {yesterday.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg text-gray-400 mb-4">Yesterday</h2>
            <div className="space-y-3">
              {yesterday.map(notification => (
                <NotificationCard 
                  key={notification.id} 
                  notification={notification}
                  onView={() => markAsRead(notification.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Older notifications */}
        {older.length > 0 && (
          <div>
            <h2 className="text-lg text-gray-400 mb-4">Older</h2>
            <div className="space-y-3">
              {older.map(notification => (
                <NotificationCard 
                  key={notification.id} 
                  notification={notification}
                  onView={() => markAsRead(notification.id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Notification Card Component
interface NotificationCardProps {
  notification: Notification;
  onView: () => void;
}

function NotificationCard({ notification, onView }: NotificationCardProps) {
  return (
    <div className="bg-gradient-to-b from-gray-300/20 via-gray-500/20 to-gray-700/20 border border-gray-600 rounded-xl p-4 flex items-center">
      <div className="mr-4 mt-1">
        {notification.icon === "profile" ? (
            <UserCircle2 size={29} />
        ) : (
            <Image src="/svg/claim.svg" alt="claim" width={29} height={29} />
        )}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-x-4">
          <h3 className="font-medium text-lg">{notification.category}</h3>
          <span className="text-gray-400 text-sm">{notification.time}</span>
        </div>
        <p className="text-gray-300 mt-1">{notification.message}</p>
      </div>
      <button 
        onClick={onView} 
        className="ml-4 text-white"
      >
        View
      </button>
    </div>
  );
}

export default Notification;