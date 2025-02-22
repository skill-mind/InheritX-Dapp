import { useState } from 'react'
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi'

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('Security')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const tabs = ['General', 'Security', 'Account']
  const faqs = [
    {
      id: 'Security',
      question: 'How secure is the platform?',
      answer:
        'InheritX ensures top-tier security with multi-signature validation, time-locked smart contracts, and zero-knowledge proofs for privacy. We conduct regular third-party audits, support hardware wallet integration, and use advanced encryption to protect user assets.',
    },
    {
      id: 'Security',
      question: 'What happens if I lose my credentials?',
      answer:
        'InheritX offers multiple recovery options, including an emergency contact system, multi-factor authentication backup, and recovery seed phrases. Users can also regain access through a designated guardian approval process or identity verification restoration.',
    },
    {
      id: 'Security',
      question: 'Which wallets and assets are supported?',
      answer:
        'InheritX supports Argent X, Braavos, and other StarkNet-compatible wallets, along with cryptocurrencies, NFTs, and digital collectibles. We also enable cross-chain asset transfers through secure bridges, with plans to expand to additional asset types in the future.',
    },
  ]

  return (
    <section className="relative min-h-screen text-white p-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-7xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg font-light text-gray-400 mb-[8.75rem]">
          Find answers to common questions about InheritX, from security and
          asset support to inheritance planning and regulatory compliance.
        </p>

        <div className="flex justify-center space-x-4 mb-[4.5rem]">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeTab === tab
                  ? 'bg-[#1B0055] text-white border-[2px] border-white'
                  : 'bg-gray-700 text-gray-300'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <>
              {faq.id === activeTab && (
                <div
                  key={index}
                  className="bg-transparent pb-6 text-left border-b border-[#413F54] last:border-0"
                >
                  <button
                    className="flex justify-between w-full"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-lg font-semibold">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <FiMinusCircle size={20} />
                    ) : (
                      <FiPlusCircle size={20} />
                    )}
                  </button>
                  {openIndex === index && (
                    <p className="text-sm mt-2 font-light text-gray-400 mr-8 lg:mr-[5rem] xl:mr-[7rem]">
                      {faq.answer}
                    </p>
                  )}
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

