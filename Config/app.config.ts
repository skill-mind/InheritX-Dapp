"use client";
export const APP_CONFIG = {
    APP_NAME: "InheritX",
    APP_DESCRIPTION:
      "InheritX is a cutting-edge blockchain-powered platform that ensures secure, automated inheritance of digital assets, including cryptocurrencies and NFTs. Leveraging StarkNet’s Layer 2 technology, InheritX provides trustless and efficient digital estate planning while maintaining the highest level of security, privacy, and decentralization.",
    APP_REPOSITORY: "https://github.com/skill-mind/InheritX-Dapp",
    APP_URL: "https://www.inheritx.com/",
    APP_AUTHOR: "InheritX Team",
    APP_KEYWORDS: [
      "blockchain inheritance",
      "digital asset inheritance",
      "crypto estate planning",
      "NFT inheritance",
      "StarkNet",
      "smart contracts",
      "decentralized finance",
      "DeFi",
    ],
    APP_ICONS: {
      icon: "/logo.png",
      apple: "/Xlogo.png",
    },
    APP_MANIFEST: "/site.webmanifest",
    APP_ROBOTS: "index, follow",
  };
  
  export const METADATA_CONFIG = {
    title: {
      default: `${APP_CONFIG.APP_NAME} - Secure Your Digital Legacy with Blockchain`,
      template: `%s | ${APP_CONFIG.APP_NAME}`,
    },
    description: APP_CONFIG.APP_DESCRIPTION,
    applicationName: APP_CONFIG.APP_NAME,
    authors: [
      {
        name: APP_CONFIG.APP_AUTHOR,
        url: APP_CONFIG.APP_REPOSITORY,
      },
    ],
    keywords: APP_CONFIG.APP_KEYWORDS,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: APP_CONFIG.APP_URL,
      siteName: APP_CONFIG.APP_NAME,
      title: `${APP_CONFIG.APP_NAME} - Secure Your Digital Legacy with Blockchain`,
      description: APP_CONFIG.APP_DESCRIPTION,
      // images: ["/og-image.jpg"], // Replace with your OpenGraph image
    },
    twitter: {
      card: "summary_large_image",
      site: "@inheritx",
      creator: "@inheritx_team",
      title: `${APP_CONFIG.APP_NAME} - Secure Your Digital Legacy with Blockchain`,
      description: APP_CONFIG.APP_DESCRIPTION,
      // images: ["/twitter-image.jpg"], // Replace with your Twitter image
    },
    icons: APP_CONFIG.APP_ICONS,
    manifest: APP_CONFIG.APP_MANIFEST,
    robots: APP_CONFIG.APP_ROBOTS,
  };