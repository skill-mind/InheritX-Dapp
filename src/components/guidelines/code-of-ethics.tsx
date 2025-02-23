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
          "We are committed to open and honest communication by",
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
        sub: " We protect user data by:",
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
        sub: " To maintain platform integrity, users must:",
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
          "Providing reliable community suppot",
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
        points: ["", "", "", "", ""],
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
        sub: " We uphold the highest professional and ethical standards by:",
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
        points: ["", "", "", "", ""],
      },
    },
  },
];

const EthicsSection: React.FC<EthicsSectionProps> = ({ section }) => {
  return (
    <div className="mb-3">
      <h2 className="text-2xl font-semibold my-8 ">
        {section.id}. {section.title}
      </h2>
      <div className="grid md:grid-cols-2 gap-8 mt-6">
        {/* first */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-white b">
            {section.subsections.left.title}
          </h2>
          <h4 className="text-base font-medium mb-3 text-white">
            {section.subsections.left.sub}
          </h4>
          <ul className="space-y-2">
            {section.subsections.left.points.map((point, index) => (
              <li key={index} className="text-gray-300 text-sm ">
                •{point}
              </li>
            ))}
          </ul>
        </div>
        {/* second  */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-white">
            {section.subsections.right.title}
          </h2>
          <h4 className="text-base font-medium mb-3 text-white">
            {section.subsections.right.sub}
          </h4>
          <ul className="space-y-2">
            {section.subsections.right.points.map((point, index) => (
              <li key={index} className="text-gray-300 text-sm">
                • {point}
              </li>
            ))}
          </ul>
        </div>

        {/* third */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-white">
            {section.subsections.left2.title}
          </h2>
          <h4 className="text-base font-medium mb-3 text-white">
            {section.subsections.left2.sub}
          </h4>
          <ul className="space-y-2">
            {section.subsections.left2.points.map((point, index) => (
              <li key={index} className="text-gray-300 text-sm">
                • {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Four */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-white">
            {section.subsections.right2.title}
          </h2>
          <h4 className="text-base font-medium mb-3 text-white">
            {section.subsections.right2.sub}
          </h4>
          <ul className="space-y-2">
            {section.subsections.right2.points.map((point, index) => (
              <li key={index} className="text-gray-300 text-sm">
                •{point}
              </li>
            ))}
          </ul>
        </div>

        {/* five */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-white">
            {section.subsections.middle.title}
          </h2>
          <h4 className="text-base font-medium mb-3 text-white">
            {section.subsections.right2.sub}
          </h4>
          <ul className="space-y-2">
            {section.subsections.right2.points.map((point, index) => (
              <li key={index} className="text-gray-300 text-sm">
                •{point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const CodeOfEthics: React.FC = () => {
  return (
    <main className="min-h-screen ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8  md:py-3 lg:py-3">
        <div className="max-w-7xl mx-auto space-y-10 md:space-y-12 lg:space-y-16  flex flex-col items-center">
          {/* Header Section */}
          <header className="space-y-6 md:space-y-5">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center">
              Code of Ethics
            </h1>
            <p className="text-sm md:text-base lg:text-[15px] leading-relaxed md:leading-relaxed lg:leading-relaxed max-w-3xl mx-auto text-center px-4 md:px-6 lg:px-8 ">
              At InheritX, we are committed to upholding the highest standards
              of integrity, security, and transparency. Our Code of Ethics
              ensures that our platform operates ethically, securely, and in
              compliance with industry regulations.
            </p>
          </header>

          {/* Ethics Sections */}
          <div className="space-y-12 md:space-y-12 lg:space-y-16 md:w-[950px] bg-gradient-to-b from-[#323246] to-[#14101c] md:px-7 rounded-2xl px-7">
            {ethicsData.map((section, index) => (
              <div
                key={section.id}
                className={`pb-6 ${
                  index < 2 ? "border-b border-gray-500" : ""
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
