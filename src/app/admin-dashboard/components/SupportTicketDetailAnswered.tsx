import { useState } from "react";
import { FileText, Link } from "lucide-react";
import SupportReply from "../components/SupportReply"; 

export default function SupportTicketDetailsAnswered({ ticket, onClose }) {
  const [isReplyOpen, setIsReplyOpen] = useState(false); 

  if (!ticket) {
    return null; 
  }

  const defaultUserId = "12345"; 
  const defaultDescription = `For some reason, I can't create an inheritance plan.
  How do I go about this? I want to leave a huge sum of money for my daughter.`;    
  const defaultAttachments = ["Screenshot23422332", "Screenshot23422332"]; 

  if (isReplyOpen) {
    return <SupportReply isOpen={isReplyOpen} onClose={() => setIsReplyOpen(false)} />;
  }


  return (
    <div className="fixed inset-0 bg-[#0D0D11CC] bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#21202A] p-10 rounded-lg max-w-2xl w-full h-[90%] text-white border border-[#615F71]">
        <h2 className="text-xl font-bold text-center mt-[-10px]">Ticket Details</h2>

        <div className="space-y-3 mt-2">
          <TicketRow label="Ticket ID" value={ticket.id || "N/A"} />
          <TicketRow label="User ID" value={ticket.userId || defaultUserId} />
          <TicketRow label="Subject" value={ticket.subject || "No Subject"} />
          <TicketRow label="Email" value={ticket.email || "No Email"} />
          <TicketRow label="Status" value={ticket.status || "Pending"} />
          <TicketRow label="Description" value={ticket.description || defaultDescription} multiLine />

          <div className="bg-[#2B2A38] p-2 rounded-lg border border-[#413F54]">
            <span className="text-white">Attachment(s)</span>
            <div className="space-y-1 mt-1">
              {ticket.attachments && ticket.attachments.length > 0
                ? ticket.attachments.map((file, index) => <Attachment key={index} fileName={file} />)
                : defaultAttachments.map((file, index) => <Attachment key={index} fileName={file} />)}
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-4">
          <button 
            onClick={() => setIsReplyOpen(true)} 
            className="bg-[#280080] border border-[#C0BFC6] px-10 py-1 rounded-2xl hover:bg-[#290080a4]"
          >
            Reply
          </button>
          <button onClick={onClose} className="bg-[#F23821] border border-[#C0BFC6] px-10 py-1 rounded-2xl hover:bg-[#f23921b6]">
            Close
          </button>
        </div>
      </div>

      {/* Reply Modal */}
      <SupportReply isOpen={isReplyOpen} onClose={() => setIsReplyOpen(false)} />
    </div>
  );
}

const TicketRow = ({ label, value, multiLine }) => (
  <div className="flex justify-between bg-[#2B2A38] text-sm border border-[#413F54] p-2 rounded-lg">
    <span className="text-white">{label}</span>
    <span className={`text-white ${multiLine ? "max-w-md text-right" : ""}`}>{value}</span>
  </div>
);

const Attachment = ({ fileName }) => (
  <div className="flex items-center justify-between bg-[#21202A] p-2 rounded-md">
    <div className="flex items-center space-x-2">
      <FileText className="w-4 h-4 text-gray-400" />
      <span>{fileName}</span>
    </div>
    <a href="#" className="flex items-center space-x-1 text-[#8A55FF]">
      <span>Preview</span>
      <Link className="w-4 h-4" />
    </a>
  </div>
);
