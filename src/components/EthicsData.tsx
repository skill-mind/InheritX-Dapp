// types/ethics.ts
interface EthicsItem {
  title: string;
  points: string[];
  sub:string;
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
  const ethicsData: EthicsSection[] = [
    {
      id: 1,
      title: "Core Principles",
      
      subsections: {
        left: {
          title: "Transparency",
          sub:  "We are committed to open and honest communication by:",
          points: [
            "We are committed to open and honest communication by",
            "Clearly communicating all processes",
            "Providing regular updates on platform status.",
            "Maintaining open documentation of procedures.",
            "Ensuring honest reporting of incidents.",
            "Offering accessible support channels."
          ]
        },
        right: {
          title: "Security",
          sub:  "We prioritize the safety of user assets through:",
          points: [
          
            "Regular security assessments and audits.",
            "Proactive threat monitoring.",
            "Immediate response to security incidents.",
            "Continuous system updates and enhancements.",
            "Educating users on best security practices"
          ]
        },
        left2: {
          title: "Privacy",
          sub:  " We protect user data by:",
          points: [
            "Enforcing strict data protection policies.",
            "Minimizing data collection to essential information",
            "Ensuring secure data transmission.",
            "Conducting regular privacy audits.",
            "Giving users control over their personal data"
          ]
        },
        right2: {                  
          title: "Innovation",
          sub:  "We continuously improve our platform by:",
          points: [
            "Advancing blockchain and security technology.",
            "Enhancing the user experience.",
            "Developing new features for better usability.",
            "Strengthening security measures.",
            "Leading the industry in responsible innovation"
          ]
        },

        middle: {     
          title: "Community Engagement",
          sub:  "We foster an ethical and responsible user community by:",
          points: [
            "Encouraging active participation and feedback.",
            "Upholding fair treatment for all users.",
            "Maintaining open lines of communication.",
            "Supporting users through education and assistance.",
            "Promoting ethical digital asset management."
          ]
        },
      }
    },
     
     










    {
      id: 2,
      title: "User & Platform Responsibilities",
      subsections: {
        left: {
          title: "User Responsibilities",
          sub:  " To maintain platform integrity, users must:",
          points: [
            "Provide accurate and truthful information.",
            "Follow security best practices.",
            "Report suspicious activities or vulnerabilities.",
            "Respect platform rules and policies.",
            "Engage with the platform and community ethically."
          ]
        },
        right: {
          title: "Platform Responsibilities",
          sub:  "As a responsible service provider, we commit to:",
          points: [
            "Keeping users informed through regular updates.",
            "Incorporating user feedback to improve services.",
             "Ensuring transparency in all decision-making.",
            "Offering fair and unbiased dispute resolution.",
            "Providing reliable community suppot"
          ]
        },
        left2: {
          title: "",
          sub:  "",
          points: [
          ]
        },
        right2: {
          title: "",
          sub:  "",
          points: []
        },

        middle: {                  
          title: "",
          sub:  "",
          points: [
            "",
            "",
            "",
            "",
            ""
          ]
        },
      }
    },
    {
      id: 3,
      title: "Compliance Framework",
      subsections: {
        left: {
          title: "Legal Adherence",
          sub:  "We ensure full compliance with regulatory standards by:",
          points: [
            "Following all applicable laws and regulations.",
            "Maintaining necessary legal documentation.",
            "Keeping licenses and certifications up to date.",
            "Conducting regular audits and compliance checks.",
            "Updating policies in response to legal changes.",
          ]
        },
        right: {
          title: "Ethical Standards",
          sub:  " We uphold the highest professional and ethical standards by:",
          points: [
            "Maintaining integrity in all operations.",
            "Treating all users fairly and equally.",
            "Ensuring equal access to platform features.",
            "Communicating honestly and transparently.",
            "Innovating responsibly with user security in mind."
          ]
        },
        left2: {
          title: "",
          sub:  "",
          points: []
        },
        right2: {
          title: "",
          sub:  "",
          points: []
        },

        middle: {                  
          title: "",
          sub:  "",
          points: [
            "",
            "",
            "",
            "",
            ""
          ]
        },
        
      }
    }

    
  ]

  export default ethicsData;