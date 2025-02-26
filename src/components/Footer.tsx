"use client";
import Image from "next/image";
import Link from "next/link";

interface FooterLinks {
  label: string;
  href: string;
}

const footerLinks: FooterLinks[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Guidelines", href: "#" },
];

const socialLinks = [
  {
    href: "#",
    icon: "/telegram.png",
    alt: "Telegram link",
  },
  {
    href: "#",
    icon: "/twitter.png",
    alt: "X social media link",
  },
];

export default function Footer() {
  return (
    <footer className="text-white mt-10 md:mt-[100px] py-6 md:py-10 px-4">
      <div className="container mx-auto max-w-[1280px] bg-[#413F54] rounded-2xl p-4 sm:p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <Image
              src="/Logo.png"
              width={110}
              height={39}
              alt="Logo"
              className="object-contain w-[90px] sm:w-[110px]"
            />
            <p className="mt-4 text-xs sm:text-sm text-[#FFFFFF] max-w-md">
              InheritX ensures secure and automated digital asset inheritance,
              allowing you to seamlessly transfer cryptocurrencies and NFTs to
              your heirs. Protect your legacy with trustless, blockchain-powered
              security.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end gap-6 text-center md:text-left">
            <div className="w-full max-w-xs">
              <h2 className="text-base sm:text-lg font-semibold mb-3">Quick Links</h2>
              <ul className="space-y-2 grid grid-cols-2 sm:grid-cols-1 gap-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 md:mt-[100px] text-xs sm:text-sm py-4 px-4 sm:px-5 bg-[#21202A99] rounded-2xl text-gray-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left">
            Copyright © InheritX 2025, All rights Reserved
          </p>
          <ul className="flex flex-row justify-center items-center gap-4 sm:gap-5">
            {socialLinks.map((social) => (
              <li key={social.href} className="cursor-pointer">
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity duration-300"
                >
                  <Image
                    className="w-4 h-3.5 sm:w-[16.67px] sm:h-[14.17px]"
                    src={social.icon}
                    alt={social.alt}
                    width={16.67}
                    height={14.17}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}