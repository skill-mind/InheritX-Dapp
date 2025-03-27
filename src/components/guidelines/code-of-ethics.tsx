import React from "react";

interface EthicsItem {
  title: string;
  points: string[];
  sub: string;
}

interface EthicsSection {
  id: number;
  title: string;
  subsections: {
    left: EthicsItem;
    right: EthicsItem;
    left2: EthicsItem;
    right2: EthicsItem;
    middle: EthicsItem;
  };
}

interface EthicsSectionProps {
  section: EthicsSection;
}

const ethicsData: EthicsSection[] = [
  {
    id: 1,
    title: "Core Principles",
    subsections: {
      left: {
        title: "Transparency",
        sub: "We are committed to open and honest communication by:",
        points: [
          "Clearly communicating all processes",
          "Providing regular updates on platform status.",
          "Maintaining open documentation of procedures.",
          "Ensuring honest reporting of incidents.",
          "Offering accessible support channels.",
        ],
      },
      right: {
        title: "Security",
        sub: "We prioritize the safety of user assets through:",
        points: [
          "Regular security assessments and audits.",
          "Proactive threat monitoring.",
          "Immediate response to security incidents.",
          "Continuous system updates and enhancements.",
          "Educating users on best security practices",
        ],
      },
      left2: {
        title: "Privacy",
        sub: "We protect user data by:",
        points: [
          "Enforcing strict data protection policies.",
          "Minimizing data collection to essential information",
          "Ensuring secure data transmission.",
          "Conducting regular privacy audits.",
          "Giving users control over their personal data",
        ],
      },
      right2: {
        title: "Innovation",
        sub: "We continuously improve our platform by:",
        points: [
          "Advancing blockchain and security technology.",
          "Enhancing the user experience.",
          "Developing new features for better usability.",
          "Strengthening security measures.",
          "Leading the industry in responsible innovation",
        ],
      },
      middle: {
        title: "Community Engagement",
        sub: "We foster an ethical and responsible user community by:",
        points: [
          "Encouraging active participation and feedback.",
          "Upholding fair treatment for all users.",
          "Maintaining open lines of communication.",
          "Supporting users through education and assistance.",
          "Promoting ethical digital asset management.",
        ],
      },
    },
  },
  {
    id: 2,
    title: "User & Platform Responsibilities",
    subsections: {
      left: {
        title: "User Responsibilities",
        sub: "To maintain platform integrity, users must:",
        points: [
          "Provide accurate and truthful information.",
          "Follow security best practices.",
          "Report suspicious activities or vulnerabilities.",
          "Respect platform rules and policies.",
          "Engage with the platform and community ethically.",
        ],
      },
      right: {
        title: "Platform Responsibilities",
        sub: "As a responsible service provider, we commit to:",
        points: [
          "Keeping users informed through regular updates.",
          "Incorporating user feedback to improve services.",
          "Ensuring transparency in all decision-making.",
          "Offering fair and unbiased dispute resolution.",
          "Providing reliable community support",
        ],
      },
      left2: {
        title: "",
        sub: "",
        points: [],
      },
      right2: {
        title: "",
        sub: "",
        points: [],
      },
      middle: {
        title: "",
        sub: "",
        points: [],
      },
    },
  },
  {
    id: 3,
    title: "Compliance Framework",
    subsections: {
      left: {
        title: "Legal Adherence",
        sub: "We ensure full compliance with regulatory standards by:",
        points: [
          "Following all applicable laws and regulations.",
          "Maintaining necessary legal documentation.",
          "Keeping licenses and certifications up to date.",
          "Conducting regular audits and compliance checks.",
          "Updating policies in response to legal changes.",
        ],
      },
      right: {
        title: "Ethical Standards",
        sub: "We uphold the highest professional and ethical standards by:",
        points: [
          "Maintaining integrity in all operations.",
          "Treating all users fairly and equally.",
          "Ensuring equal access to platform features.",
          "Communicating honestly and transparently.",
          "Innovating responsibly with user security in mind.",
        ],
      },
      left2: {
        title: "",
        sub: "",
        points: [],
      },
      right2: {
        title: "",
        sub: "",
        points: [],
      },
      middle: {
        title: "",
        sub: "",
        points: [],
      },
    },
  },
];

const EthicsSection: React.FC<EthicsSectionProps> = ({ section }) => {
  // Helper function to render a subsection only if it has content
  const renderSubsection = (subsection: EthicsItem) => {
    if (!subsection.title || !subsection.points.length) return null;

    return (
      <div className="p-4 sm:p-6 bg-opacity-10 rounded-lg">
        <h2 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-4 text-white">
          {subsection.title}
        </h2>
        <h4 className="text-sm sm:text-base font-medium mb-2 sm:mb-3 text-white">
          {subsection.sub}
        </h4>
        <ul className="space-y-1.5 sm:space-y-2">
          {subsection.points.map((point, index) => (
            <li key={index} className="text-gray-300 text-xs sm:text-sm flex">
              <span className="mr-2">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="mb-3">
      <h2 className="text-xl sm:text-2xl font-semibold my-4 sm:my-8">
        {section.id}. {section.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-4 sm:mt-6">
        {renderSubsection(section.subsections.left)}
        {renderSubsection(section.subsections.right)}
        {renderSubsection(section.subsections.left2)}
        {renderSubsection(section.subsections.right2)}
        {renderSubsection(section.subsections.middle) && (
          <div className="md:col-span-2">
            {renderSubsection(section.subsections.middle)}
          </div>
        )}
      </div>
    </div>
  );
};

const CodeOfEthics: React.FC = () => {
  return (
    <main className="min-h-screen py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
          <header className="space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center">
              Code of Ethics
            </h1>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto text-center px-4 sm:px-6">
              At InheritX, we are committed to upholding the highest standards
              of integrity, security, and transparency. Our Code of Ethics
              ensures that our platform operates ethically, securely, and in
              compliance with industry regulations.
            </p>
          </header>

          <div className="space-y-8 sm:space-y-12 w-full sm:max-w-5xl lg:max-w-6xl mx-auto bg-gradient-to-b from-gray-300/20 via-gray-500/20 to-gray-700/20 p-4 sm:p-6 lg:p-8 rounded-2xl">
            {ethicsData.map((section, index) => (
              <div
                key={section.id}
                className={`pb-6 ${
                  index < ethicsData.length - 1
                    ? "border-b border-gray-500"
                    : ""
                }`}
              >
                <EthicsSection section={section} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CodeOfEthics;
