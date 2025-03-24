"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SupportTicketDetailUnanswered from "../components/SupportTicketDetailUnanswered";
import SupportTicketDetailAnswered from "../components/SupportTicketDetailAnswered";

interface SupportTicketType {
  date: string;
  id: string;
  email: string;
  subject: string;
  status: string;
  userId: string; 
  description: string; 
  attachments: string[];
}

export default function SupportTicket() {
  
  const [selectedTicket, setSelectedTicket] = useState<SupportTicketType | null>(null);

  return (
    <div className="px-4 sm:px-6 mt-10 pb-10">
      <div className="bg-[#29242F] bg-[linear-gradient(180deg,rgba(41,36,47,1)_55%,rgba(20,16,26,1)_100%)] rounded-lg p-4 sm:p-6 border border-[#413F54]">
        <div className="flex justify-between">
          <h2 className="text-xl lg:text-[32px] mb-4 sm:mb-6 font-[400]">Support Tickets</h2>
          <div className="flex">
            <p className="text-[#5000FF] hover:text-[#5100ffb0] cursor-pointer">View All Tickets</p>
            <ChevronDown className="w-5 h-5 mt-1 ml-1" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="text-left text-white">
                <th className="pb-4 font-medium">Date</th>
                <th className="pb-4 font-medium">Ticket ID</th>
                <th className="pb-4 font-medium w-[25%]">Email</th>
                <th className="pb-4 font-medium">Subject</th>
                <th className="pb-4 font-medium">Status</th>
                <th className="pb-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="font-light">
              {[
                { date: "24 - 01 - 2025", id: "24224", email: "danielochoja@gmail.com", subject: "Inheritance", status: "Answered" },
                { date: "24 - 01 - 2025", id: "34263", email: "daviechoe@inherix.com", subject: "Claims", status: "Answered" },
                { date: "24 - 01 - 2025", id: "35521", email: "nazried@jaspertech.org", subject: "Assets", status: "Unanswered" }
              ].map(ticket => (
                <tr key={ticket.id}>
                  <td className="py-3">{ticket.date}</td>
                  <td className="py-3">{ticket.id}</td>
                  <td className="py-3">{ticket.email}</td>
                  <td className="py-3">{ticket.subject}</td>
                  <td className="py-3">{ticket.status}</td>
                  <td className="py-3">
                    <button
                      className="text-[#5000FF] hover:text-[#5100ffb0] underline"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedTicket({
                          ...ticket,
                          userId: "N/A", 
                          description: "No description available.", 
                          attachments: [], 
                        });
                      }}
                      
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ticket Details Modal - Render based on status */}
      {selectedTicket && (
        selectedTicket.status === "Answered" ? 
          <SupportTicketDetailAnswered ticket={selectedTicket} onClose={() => setSelectedTicket(null)} /> 
          : 
          <SupportTicketDetailUnanswered ticket={selectedTicket} onClose={() => setSelectedTicket(null)} />
      )}
    </div>
  );
}
