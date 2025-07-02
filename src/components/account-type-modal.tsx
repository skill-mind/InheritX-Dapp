"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";

// --- Types ---
interface AccountTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const userAccountOption = {
  title: "Access Owner and Beneficiary ",
  description: [
    "Create an inheritance plan to secure your digital assets for future generations.",
    "Claim and inherit assets seamlessly through our platform.",
    "Manage your digital legacy with ease and confidence.",
  ],
  dashboardRoute: "/user-dashboard",
};

// --- Animation Variants ---
const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.5, ease: "easeOut" },
  },
};

export function AccountTypeModal({
  isOpen,
  onClose,
  onSubmit,
}: AccountTypeModalProps) {
  const router = useRouter();

  const handleSelect = () => {
    localStorage.setItem("userAccountType", "user");
    onSubmit();
    router.push(userAccountOption.dashboardRoute);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <motion.div
        className="bg-[#0C1327] rounded-lg max-w-2xl w-full mx-4 p-6 md:p-10 shadow-lg overflow-y-auto max-h-[90vh]"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-lg font-bold"
          >
            ✕
          </button>
        </div>

        {/* Header */}
        <motion.div
          className="text-center mb-10"
          variants={headerVariants}
        >
          <motion.h1
            className="font-bold text-2xl uppercase text-white mb-4"
            variants={headerVariants}
          >
            Welcome to InheritX
          </motion.h1>
          <motion.p
            className="text-base text-gray-300"
            variants={headerVariants}
          >
            Create your profile to get started.
          </motion.p>
        </motion.div>

        {/* Card */}
        <motion.div
          className="border border-[#343B4F] rounded-xl p-6 md:p-8 bg-[#081028] cursor-pointer hover:shadow-xl transition-shadow"
          variants={cardVariants}
          onClick={handleSelect}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.h2 className="text-xl font-semibold text-white mb-4">
            {userAccountOption.title}
          </motion.h2>
          <motion.ul
            className="list-disc pl-6 mb-6 space-y-2"
            variants={listVariants}
          >
            {userAccountOption.description.map((item, i) => (
              <motion.li
                key={`desc-${i}`}
                className="text-sm text-gray-300 leading-relaxed"
                variants={listItemVariants}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div variants={buttonVariants}>
            <div className="inline-block border border-[#1FACAA] text-[#1FACAA] hover:bg-[#1FACAA] hover:text-[#081028] transition-colors duration-200 rounded-full px-6 py-2 text-sm font-medium">
              Proceed to dashboard
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}