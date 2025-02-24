import React from "react";
import GlassmorphicContainer from "../ui/GlassmorphicContainer";

interface DataGroupProps {
  title: string;
  subtitle?: string;
  items: string[];
}

const DataGroup = ({ title, subtitle, items }: DataGroupProps) => (
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
          className="text-white font-normal text-sm md:text-base lg:text-lg flex items-center"
        >
          <span className="mr-2">•</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

function PrivacyPolicy() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16">
      <p className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">
        Privacy Policy
      </p>

      <GlassmorphicContainer className="w-full rounded-3xl mt-4 py-12 px-4 md:px-8 lg:px-16">
        <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold mb-2">
          1. Data Collection and Usage
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
          <DataGroup
            title="Personal Information"
            subtitle="We collect:"
            items={[
              "Legal name and contact information",
              "Government-issued identification",
              "Blockchain wallet addresses",
              "Authentication credentials",
              "Communication preferences",
            ]}
          />

          <DataGroup
            title="Usage Data"
            subtitle="We monitor:"
            items={[
              "Platform interaction patterns",
              "Security event logs",
              "Transaction history",
              "Access locations and times",
              "Feature utilization metrics",
            ]}
          />

          <DataGroup
            title="Technical Data"
            subtitle="We record:"
            items={[
              "Device information",
              "IP addresses",
              "Browser type and version",
              "Network information",
              "System logs",
            ]}
          />
        </div>

        <div className="w-full border-t border-[1px] border-[#413F54]" />

        <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold mb-2 mt-4">
          2. Data Protection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
          <DataGroup
            title="Security Measures"
            items={[
              "End-to-end encryption for all sensitive data",
              "Regular security audits and penetration testing",
              "Zero-knowledge proof implementation",
              "Secure key management systems",
              "Regular backup and recovery testing",
            ]}
          />

          <DataGroup
            title="Storage and Retention"
            items={[
              "Encrypted storage on distributed systems",
              "Regular data minimization reviews",
              "Compliance with retention regulations",
              "Secure data destruction protocols",
              "Backup maintenance procedures",
            ]}
          />
        </div>

        <div className="w-full border-t border-[1px] border-[#413F54]" />

        <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold mt-4">
          3. User Rights and Controls
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
          <DataGroup
            title="Access Rights"
            subtitle="Users can:"
            items={[
              "Request data copies",
              "Correct personal information",
              "Delete account data",
              "Export transaction history",
              "Review security logs",
            ]}
          />

          <DataGroup
            title="Privacy Control"
            subtitle="Users manage:"
            items={[
              "Visibility settings",
              "Security event logs",
              "Communication preferences",
              "Data sharing options",
              "Authentication methods",
              "Activity notifications",
            ]}
          />
        </div>

        <div className="w-full border-t border-[1px] border-[#413F54]" />

        <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold mt-4">
          4. Third-Party Sharing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
          <DataGroup
            title="Service Providers"
            subtitle="Limited sharing with:"
            items={[
              "Identity verification services",
              "Security audit firms",
              "Legal compliance partners",
              "Technical infrastructure providers",
              "Customer support systems",
            ]}
          />

          <DataGroup
            title="Legal Requirements"
            subtitle="Data shared for:"
            items={[
              "Regulatory compliance",
              "Legal proceedings",
              "Law enforcement requests",
              "Court orders",
              "Fraud prevention",
            ]}
          />
        </div>
      </GlassmorphicContainer>
    </section>
  );
}

export default PrivacyPolicy;
