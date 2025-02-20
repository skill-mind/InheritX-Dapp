import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import "./globals.css";



export const metadata: Metadata = {
  title: "InheritX",
  description:
    "InheritX is a revolutionary blockchain-powered digital asset inheritance platform that enables secure, automated transfer of cryptocurrencies and NFTs to designated heirs. Built on StarkNet's Layer 2 solution, InheritX offers a trustless, efficient system for digital estate planning while ensuring complete security and privacy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
