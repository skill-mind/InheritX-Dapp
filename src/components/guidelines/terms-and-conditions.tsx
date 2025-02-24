import React from "react";
import GlassmorphicContainer from "../ui/GlassmorphicContainer";

export default function TermsAndCondition() {


  return (
    <section className="gap-[18px] px-4 md:px-8 lg:px-16 w-full">
      <h1 className="text-[40px] text-center font-black my-16">
        Terms and Conditions
      </h1>
      <GlassmorphicContainer className='w-full rounded-3xl mt-4 py-12 px-4 md:px-8 lg:px-16'>
        <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold mb-2">
          1. Account Creation
        </h2>

        <div className="w-full flex min-w-1/2 flex-wrap gap-8 mb-4">
          <DataGroup
            title=""
            subtitle="Users must provide accurate and complete information when creating an account on our platform. This includes:"
            undertitle="The platform reserves the right to verify user information at any time and may suspend or terminate accounts containing false or misleading information."
            items={[
              "Legal name, current address, and valid contact information",
              "Verifiable identification documents when requested",
              "Regular updates to maintain information accuracy",
              "Agreement not to impersonate others or create accounts for unauthorized purposes",
            ]}
          />
        </div>

        <div className="w-full border-t border-[1px] border-[#413F54] mb-10 mt-5" />
        <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold mb-2">
          2. Usage Rules
        </h2>

        <div className="w-full flex gap-8 mb-4">
          <DataGroup
            title=""
            subtitle="Users agree to comply with the following platform guidelines:"
            undertitle="Comply with anti-money laundering (AML) and know-your-customer (KYC) requirements"
            items={[
              "Adhere to all applicable laws and regulations regarding digital asset transactions",
              "Maintain appropriate licenses and permissions for trading activities",
              "Follow platform-specific trading rules and limitations",
              "Respect intellectual property rights and third-party rights",
              "Refrain from manipulative or deceptive trading practices",
            ]}
          />
        </div>

        <div className="w-full border-t border-[1px] border-[#413F54] mb-10 mt-5" />

        <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold mb-2">
          3. Security Responsibilities
        </h2>

        <div className="flex gap-8 mb-4">
          <DataGroup
            title=""
            subtitle="Users acknowledge and accept the following security obligations:"
            undertitle="The platform reserves the right to implement additional security measures as needed."
            items={[
              "Maintaining the confidentiality of authentication credentials",
              "Using strong, unique passwords and enabling two-factor authentication",
              "Regular monitoring of account activity",
              "Immediate reporting of unauthorized access or suspicious activities",
            ]}
          />
        </div>

        <div className="w-full border-t border-[1px] border-[#413F54] mb-10 mt-5" />

        <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold mb-2">
          4. Platform Liability Limitations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
        <DataGroup
            title="Platform Liability Limitations"
            subtitle="The platform’s liability is limited in the following circumstances:"
            undertitle="Force majeure events"
            items={[
              "Loss of digital assets due to market volatility",
              "Technical issues beyond the platform’s reasonable control",
              "Third-party service provider failures",
              "User error or negligence",
            ]}
          />
        <DataGroup
            title="User Liability"
            subtitle="Users are liable for:"
            undertitle=""
            items={[
              "Losses resulting from compromised account credentials",
              "Unauthorized transactions from their account",
              "Violations of platform rules and guidelines",
              "Any fraudulent or illegal activities conducted through their account",
            ]}
          />
        </div>

        <div className="w-full border-t border-[1px] border-[#413F54] mb-10 mt-5" />
        <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold mb-2">
          5. Dispute Resolution
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
        <DataGroup
            title="Resolution Process"
            subtitle="Disputes will be resolved through the following process:"
            items={[
              "Initial review by platform support team",
              "Internal investigation of relevant transaction data",
              "Mediation between involved parties",
              "Final determination by platform administration",
              "Option for third-party arbitration if necessary"
            ]}
          />
        <DataGroup
            title="Time Limits"
            items={[
              "Disputes must be filed within 30 days of the incident",
              "Platform will acknowledge disputes within 2 business days",
              "Initial response provided within 5 business days",
              "Resolution target within 30 days of filing",
            ]}
          />
        </div>

        <div className="w-full border-t border-[1px] border-[#413F54] mb-10 mt-5" />
     
        <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold mb-2">
          6.Service Termination
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
        <DataGroup
            title="Platform-Initiated Termination"
            subtitle="The platform may terminate or suspend services for:"
            items={[
              "Violation of terms and conditions",
              "Suspicious or fraudulent activity",
              "Extended period of account inactivity",
              "Regulatory or legal requirements",
              "Platform maintenance or upgrades",
              "Business decisions affecting service availability",
            ]}
          />
        <DataGroup
            title="User-Initiated Termination"
            items={[
              "Submitting a formal termination request",
              "Completing all pending transactions",
              "Withdrawing or transferring remaining assets",
              "Verifying identity for security purposes",
            ]}
          />
        <DataGroup
            title="Effect of Termination"
            items={[
              "Upon termination:",
              "Access to services will be immediately suspended",
              "Pending transactions may be completed or cancelled",
              "User data will be retained as required by law",
              "Certain obligations survive termination",
            ]}
          />
        </div>
        <div className="w-full border-t border-[1px] border-[#413F54] mb-10 mt-5" />
        <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold mb-2">
          7. Modification of Terms
        </h2>
        <div className="w-full flex gap-8 mb-4">
          <DataGroup
            title=""
            subtitle="The platform reserves the right to modify these terms and conditions at any time. Users will be notified of significant changes through:"
            undertitle="Continued use of the platform after modifications constitutes acceptance of updated terms."
            items={[
              "Email notifications",
              "Platform announcements",
              "Website updates",
            ]}
          />
        </div>
        <div className="w-full border-t border-[1px] border-[#413F54] mb-10 mt-5" />
      </GlassmorphicContainer>
    </section>
  );
}

interface DataGroupProps {
  title: string;
  subtitle?: string;
  items: string[];
  undertitle?: string;
}

const DataGroup = ({ title, subtitle, items, undertitle }: DataGroupProps) => (
  <div>
    <h3 className="text-white font-bold text-lg md:text-xl lg:text-2xl mb-2 transition-all duration-300">
      {title}
    </h3>
    {subtitle && (
      <p className="text-white font-normal text-sm md:text-base lg:text-lg mb-2">
        {subtitle}
      </p>
    )}
    <ul className="space-y-1">
      {items.map((item, index) => (
        <li
          key={index}
          className="text-white font-normal w-full text-sm md:text-base lg:text-lg flex items-center">
          <span className="mr-2">•</span>
          {item}
        </li>
      ))}
    </ul>
    {undertitle && (
      <p className="text-white font-normal text-sm md:text-base lg:text-lg mb-2">
        {undertitle}
      </p>
    )}
  </div>
);
