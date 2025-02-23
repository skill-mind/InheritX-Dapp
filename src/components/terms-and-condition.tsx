import React from "react";

export default function TermsAndCondition() {
  const termsData = [
    {
      "id": "1",
      "title": "Account Creation",
      "content": [
        "Users must provide accurate and complete information when creating an account on our platform. This includes:",
        "Legal name, current address, and valid contact information",
        "Verifiable identification documents when requested",
        "Regular updates to maintain information accuracy",
        "Agreement not to impersonate others or create accounts for unauthorized purposes",
        "The platform reserves the right to verify user information at any time and may suspend or terminate accounts containing false or misleading information."
      ]
    },
    {
      "id": "2",
      "title": "Usage Rules",
      "content": [
        "Users agree to comply with the following platform guidelines:",
        "Adhere to all applicable laws and regulations regarding digital asset transactions",
        "Maintain appropriate licenses and permissions for trading activities",
        "Follow platform-specific trading rules and limitations",
        "Respect intellectual property rights and third-party rights",
        "Refrain from manipulative or deceptive trading practices",
        "Comply with anti-money laundering (AML) and know-your-customer (KYC) requirements"
      ]
    },
    {
      "id": "3",
      "title": "Security Responsibilities",
      "content": [
        "Users acknowledge and accept the following security obligations:",
        "Maintaining the confidentiality of authentication credentials",
        "Using strong, unique passwords and enabling two-factor authentication",
        "Regular monitoring of account activity",
        "Immediate reporting of unauthorized access or suspicious activities",
        "Keeping security software and systems up to date",
        "Following recommended security practices provided by the platform",
        "The platform reserves the right to implement additional security measures as needed."
      ]
    },
    {
      "id": "4",
      "sections": [
        {
          "title": "Platform Liability Limitations",
          "content": [
            "The platform’s liability is limited in the following circumstances:",
            "Loss of digital assets due to market volatility",
            "Technical issues beyond the platform’s reasonable control",
            "Third-party service provider failures",
            "User error or negligence",
            "Force majeure events"
          ]
        },
        {
          "title": "User Liability",
          "content": [
            "Users are liable for:",
            "Losses resulting from compromised account credentials",
            "Unauthorized transactions from their account",
            "Violations of platform rules and guidelines",
            "Any fraudulent or illegal activities conducted through their account"
          ]
        }
      ]
    },
    {
      "id": "5",
      "sections": [
        {
          "title": "Resolution Process",
          "content": [
            "Disputes will be resolved through the following process:",
            "Initial review by platform support team",
            "Internal investigation of relevant transaction data",
            "Mediation between involved parties",
            "Final determination by platform administration",
            "Option for third-party arbitration if necessary"
          ]
        },
        {
          "title": "Time Limits",
          "content": [
            "Disputes must be filed within 30 days of the incident",
            "Platform will acknowledge disputes within 2 business days",
            "Initial response provided within 5 business days",
            "Resolution target within 30 days of filing"
          ]
        }
      ]
    },
    {
      "id": "6",
      "sections": [
        {
          "title": "Platform-Initiated Termination",
          "content": [
            "The platform may terminate or suspend services for:",
            "Violation of terms and conditions",
            "Suspicious or fraudulent activity",
            "Extended period of account inactivity",
            "Regulatory or legal requirements",
            "Platform maintenance or upgrades",
            "Business decisions affecting service availability"
          ]
        },
        {
          "title": "User-Initiated Termination",
          "content": [
            "Users may terminate their account by:",
            "Submitting a formal termination request",
            "Completing all pending transactions",
            "Withdrawing or transferring remaining assets",
            "Verifying identity for security purposes"
          ]
        },
        {
          "title": "Effect of Termination",
          "content": [
            "Upon termination:",
            "Access to services will be immediately suspended",
            "Pending transactions may be completed or cancelled",
            "User data will be retained as required by law",
            "Certain obligations survive termination"
          ]
        }
      ]
    },
    {
      "id": "7",
      "title": "Modification of Terms",
      "content": [
        "The platform reserves the right to modify these terms and conditions at any time. Users will be notified of significant changes through:",
        "Email notifications",
        "Platform announcements",
        "Website updates",
        "Continued use of the platform after modifications constitutes acceptance of updated terms."
      ]
    }
  ];
  
  
  return (
    <section className="gap-[18px]">
      <h1 className="text-[40px] text-center font-black my-16">
        Terms and Conditions
      </h1>
      <div className="bg-gradient-to-b from-gray-300/20 via-gray-500/20 to-gray-700/20 rounded-[50px] border-[1px] border-[#413F54] py-[40px] px-[36px]">
      {termsData.map((section) => (
          <div key={section.id} className="mb-8 border-b border-[#413F54] pb-8">
            <h2 className="text-[32px] font-bold mb-4">{section.id}. {section.title || section.sections?.[0].title}</h2>
            {section.sections ? (
              <div className="w-full grid md:grid-cols-2 gap-[18px]">
                {section.sections.map((subSection, index) => (
                  <div key={index} className="flex-1 gap-[8px] ">
                    <h3 className="text-[24px] font-semibold mb-3">{subSection.title}</h3>
                    <ul className="list-disc pl-5  space-y-2">
                      {subSection.content.map((item, i) => (
                        <li key={i} className="text-[16px] text-[#FFFFFF] font-Manrope font-normal text-base leading-[21.86px] tracking-normal">{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                ))}
              </div>
              
            ) : (
              <div className="p-6">
                <ul className="list-disc pl-5 space-y-2">
                  {section.content.map((item, i) => (
                    <li key={i}  className="text-[16px] text-[#FFFFFF] font-Manrope font-normal text-base leading-[21.86px] tracking-normal">{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
