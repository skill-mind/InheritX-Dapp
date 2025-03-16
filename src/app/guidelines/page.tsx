"use client";
import Footer from "@/components/Footer";
import CodeOfEthics from "@/components/guidelines/code-of-ethics";
import Guidelines from "@/components/guidelines/guidelines";
import PrivacyPolicy from "@/components/guidelines/privacy-policy";
import TermsAndConditions from "@/components/guidelines/terms-and-conditions";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

 const metadata = {
  title: "Guidelines | Privacy Policy, Terms, and Ethics",
  description:
    "Explore our platform's guidelines, including Privacy Policy, Terms and Conditions, and Code of Ethics. Understand your rights, responsibilities, and our commitment to data protection.",
  keywords: [
    "Privacy Policy",
    "Terms and Conditions",
    "Code of Ethics",
    "User Rights",
    "Data Protection",
    "Security Measures",
    "Platform Guidelines"
  ],
};

function page() {
  const [guideline, setGuideline] = useState<
    "privacy-policy" | "terms-and-conditions" | "code-of-ethics"
  >("privacy-policy");
  return (
    <>
      <Navbar />
    <main className="mx-auto max-w-[1280px] py-10 md:px-[4.2rem] relative ">
      <Guidelines guideline={guideline} setGuideline={setGuideline} />
      {guideline === "privacy-policy" && <PrivacyPolicy />}
      {guideline === "terms-and-conditions" && <TermsAndConditions />}
      {guideline === "code-of-ethics" && <CodeOfEthics />}
    </main>
      <Footer />
    </>
  );
}

export default page;
