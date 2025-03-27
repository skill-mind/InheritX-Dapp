import { useState } from "react";
import { CheckCircle } from "lucide-react";

interface ReplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReplyModal({ isOpen, onClose }: ReplyModalProps) {
  const [status, setStatus] = useState<"reply" | "sent" | "deleted">("reply");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#0D0D11CC] bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#21202A] p-8 rounded-3xl max-w-xl w-full h-[70%] text-white border border-[#615F71]">
        
        {status === "reply" && (
          <button
            onClick={() => setStatus("deleted")}
            className="text-gray-400 text-xl hover:text-white"
          >
            &larr; Go Back
          </button>
        )}

        {status === "reply" && (
          <>
            <h2 className="text-3xl font-bold text-center mt-10">Reply Ticket</h2>
            <div className="mt-4">
              <label className="block text-sm">Subject</label>
              <input 
                type="text" 
                className="w-full p-3 mt-1 text-sm bg-[#2B2A38] border border-[#D9D9DD] rounded-md outline-none" 
                placeholder="Email Subject"  
              />
              <label className="block mt-3 text-sm">Message</label>
              <textarea 
                className="w-full p-2 mt-1 bg-[#2B2A38] text-sm border border-[#D9D9DD] rounded-md h-24 outline-none"  
                placeholder="Send Message"
              />
            </div>
            <button 
              onClick={() => setStatus("sent")} 
              className="mt-4 lg:w-[30%] bg-[#1B0055] px-4 py-2 border border-[#C0BFC6] rounded-2xl hover:bg-[#290080a4]"
            >
              Send Message
            </button>
          </>
        )}

        {status === "sent" && (
          <div className="flex flex-col items-center justify-center h-full">
            <CheckCircle className="text-green-500 w-28 h-28" />
            <h2 className="text-4xl font-bold mt-4">Reply Sent</h2>
            <p className="text-center text-sm mt-4">
              Message sent to user's email address. Please continue discussion or <br /> settle disputes in mailbox.
            </p>
            <button 
              onClick={onClose} 
              className="mt-4 bg-white text-black px-10 py-2 rounded-2xl hover:bg-zinc-300"
            >
              Close
            </button>
          </div>
        )}

        {status === "deleted" && (
          <div className="flex flex-col items-center justify-center h-full">
            <CheckCircle className="text-green-500 w-28 h-28" />
            <h2 className="text-4xl font-bold mt-4">Delete Successful</h2>
            <p className="text-center text-sm mt-4">Question deleted successfully.</p>
            <button 
              onClick={onClose} 
              className="mt-4 bg-white text-black px-10 py-2 rounded-2xl hover:bg-zinc-300"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
