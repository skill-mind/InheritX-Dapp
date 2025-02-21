import { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Page = () => {
    const [selectButtonIndex, setSelectedButtonIndex] = useState<number>(2);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleOpen = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    const toggleCategory = (index: number) => {
        setSelectedButtonIndex(index);
    };

    const FaqTabs = [
        {
            id: 1,
            heading: "Can I modify my inheritance plan?",
            content: "Active account holders can update beneficiary information, adjust asset allocation, modify time-lock periods, change security settings, and add or remove assets from their inheritance plan.",
            category: "Account",
        },
        {
            id: 2,
            heading: "What happens to my plan if regulations change?",
            content: "InheritX ensures regular compliance updates, automated policy adjustments, and user notifications of changes, while providing grace periods for plan updates and legal compliance support.",
            category: "Account",
        },
        {
            id: 3,
            heading: "How are disputes handled?",
            content: "InheritX’s dispute resolution process includes automated verification systems, a multi-step review process, third-party arbitration options, legal compliance verification, and transparent documentation for fair and secure conflict resolution.",
            category: "Account",
        },
    ];

    const buttons = ["General", "Security", "Account"];

    const filteredFaqs =
        selectButtonIndex === 0
            ? FaqTabs 
            : FaqTabs.filter((tab) => tab.category === buttons[selectButtonIndex]);

    return (
        <>
        <Navbar/>
        <div className="w-full min-h-screen flex flex-col gap-[60px] items-center justify-center text-center py-20 px-6">
            <header className="flex flex-col items-center justify-center gap-4 mb-10">
                <h1 className="font-bold text-white text-4xl md:text-7xl">Frequently Asked Questions</h1>
                <p className="max-w-[862px] text-white text-lg font-light px-[5%]">
                    Find answers to common questions about InheritX, from security and asset
                    support to inheritance planning and regulatory compliance.
                </p>
            </header>

            <div className="flex flex-row items-center justify-center gap-6">
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        onClick={() => toggleCategory(index)}
                        className={`border-[1px] border-[#413F54] px-[28px] py-[10px] rounded-[30px] ${
                            selectButtonIndex === index ? "bg-[#1B0055] border border-[#C0BFC6] " :""
                        }`}
                    >
                        {button}
                    </button>
                ))}
            </div>

           
            <div className="flex flex-col items-start gap-1">
                {filteredFaqs.map((tab, index) => (
                    <div
                        key={tab.id}
                        onClick={() => toggleOpen(index)}
                        className="cursor-pointer w-full max-w-[948px] py-7 flex flex-col items-start gap-3 border-b-[1px] border-[#413F54]"
                    >
                        <header className="w-full flex flex-row items-center justify-between">
                            <h1 className="text-white font-semibold text-lg">{tab.heading}</h1>

                            <button className="w-5 h-5 rounded-full border-2 border-white relative">
                                <span
                                    className={`block w-[12px] h-[2px] bg-white transition duration-300 ease-in-out absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] ${
                                        openIndex === index ? "rotate-[45deg]" : "rotate-0"
                                    }`}
                                ></span>
                                <span
                                    className={`block w-[12px] h-[2px] bg-white absolute duration-300 ease-in-out top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] ${
                                        openIndex === index ? "rotate-[-45deg]" : "rotate-0"
                                    }`}
                                ></span>
                            </button>
                        </header>
                        <article
                            className={`w-full text-left text-[#D9D9D9] text-sm font-light overflow-hidden ${
                                openIndex === index ? "h-auto" : "h-0"
                            }`}
                        >
                            {tab.content}
                        </article>
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Page;
