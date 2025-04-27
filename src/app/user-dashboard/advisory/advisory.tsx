import React, { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { DirectionAnimation } from "@/motion/Animation";

function Advisory() {
  const [messages, setMessages] = useState([
    {
      text: "Hello!👋, How can I help you today? Choose an option below or type your question.",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  // Add a ref for the chat container to enable auto-scrolling
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    // Add user message
    setMessages([...messages, { text: inputValue, sender: "user" }]);

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: `Thank you for your message about "${inputValue}". Our team will review your request and get back to you soon.`,
          sender: "bot",
        },
      ]);
    }, 1000);

    setInputValue("");
  };

  const handleButtonClick = (option: string) => {
    // Add user selection as a message
    setMessages([...messages, { text: option, sender: "user" }]);

    // Simulate bot response based on selection
    let response = "";
    switch (option) {
      case "Support":
        response =
          "Our support team is here to help. Please describe your issue, and we'll assist you as soon as possible.";
        break;
      case "Inheritance plan":
        response =
          "Inheritance planning helps ensure your digital assets are passed on according to your wishes. How would you like to set up your inheritance plan?";
        break;
      case "Claim":
        response =
          "To process your claim, we'll need some additional information. Please provide details about the assets you're claiming.";
        break;
      case "Swap token":
        response =
          "You can swap tokens directly through our platform. Which tokens would you like to exchange?";
        break;
      default:
        response = "How can I help you with that?";
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: response, sender: "bot" }]);
    }, 800);
  };

  return (
    <div className="flex flex-col h-[500px] mb-10 bg-transparent">
      <div
        ref={chatContainerRef}
        className="flex-1 bg-[#FFFFFF1A] p-4 overflow-y-auto"
      >
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <DirectionAnimation
                direction={
                  message.sender === "user" ? "right-to-left" : "left-to-right"
                }
              >
                <div
                  className={`max-w-xs md:max-w-md p-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-[#100033] border border-[#FFFFFF1A] text-white"
                      : "bg-[#FFFFFF1A] border border-[#FFFFFF1A]"
                  }`}
                >
                  {message.text}
                </div>
              </DirectionAnimation>
            </div>
          ))}
        </div>
      </div>

      {/* Option buttons */}
      <div className="p-4 border-t border-[#FFFFFF1A]">
        <DirectionAnimation>
          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
            <button
              onClick={() => handleButtonClick("Support")}
              className="p-2 text-sm bg-gradient-to-b from-gray-300/20 via-gray-500/20 to-gray-700/20 hover:bg-gray-700 rounded-md transition-colors"
            >
              Support
            </button>
            <button
              onClick={() => handleButtonClick("Inheritance plan")}
              className="p-2 text-sm bg-gradient-to-b from-gray-300/20 via-gray-500/20 to-gray-700/20 hover:bg-gray-700 rounded-md transition-colors"
            >
              Inheritance plan
            </button>
            <button
              onClick={() => handleButtonClick("Claim")}
              className="p-2 text-sm bg-gradient-to-b from-gray-300/20 via-gray-500/20 to-gray-700/20 hover:bg-gray-700 rounded-md transition-colors"
            >
              Claim
            </button>
            <button
              onClick={() => handleButtonClick("Swap token")}
              className="p-2 text-sm bg-gradient-to-b from-gray-300/20 via-gray-500/20 to-gray-700/20 hover:bg-gray-700 rounded-md transition-colors"
            >
              Swap token
            </button>
          </div>
        </DirectionAnimation>

        {/* Chat input */}
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSend} className="flex items-center space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1 bg-[#FFFFFF1A] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
            />
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Advisory;
