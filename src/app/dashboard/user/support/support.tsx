import React, { useState, useRef } from "react";
import SuccessModal from "../component/RequestSuccessModal";
import { ChevronDown, Upload } from "lucide-react";
import { DirectionAnimation } from "@/motion/Animation";

interface FormData {
  email: string;
  subject: string;
  description: string;
  attachment: File | null;
}

const SubjectOptions = [
  "Claims",
  "Billing",
  "Technical Support",
  "Account Access",
  "General Inquiry",
];

const SupportRequestForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    subject: "Claims",
    description: "",
    attachment: null,
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubjectSelect = (subject: string) => {
    setFormData((prev) => ({ ...prev, subject }));
    setDropdownOpen(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, attachment: e.target.files![0] }));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "application/pdf"
      ) {
        if (file.size <= 5 * 1024 * 1024) {
          // 5MB
          setFormData((prev) => ({ ...prev, attachment: file }));
        } else {
          alert("File size exceeds 5MB limit");
        }
      } else {
        alert("Only JPG, PNG, or PDF files are allowed");
      }
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Show success modal
    setIsModalOpen(true);

    setIsSubmitting(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent">
      <DirectionAnimation>
        <div className="w-full max-w-2xl sm:p-8 rounded-lg  border-gray-200">
          <div
            className="px-4 py-3 sm:p-8 rounded-[20px] flex flex-col gap-7 bg-grdient-to-t from-[#4F4E4F] via-[#4F4E4F] via-70% to-[#413F54] border border-[#413F54]"
            style={{
              background:
                "linear-gradient(to top, #2B2A38 , #413F54 , #2B2A38  )",
            }}
          >
            <div>
              {" "}
              <h2 className="text-2xl font-normal text-white mb-1">
                Submit a Request
              </h2>
              <p className="text-[10px] font-light text-white ">
                Need help with your inheritance plan or account? If our
                <span className="text-[#C5AAFF] font-semibold"> FAQs </span>
                don't answer your question, submit a support ticket, and our
                team will assist you within 24 business hours.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="">
                <label
                  htmlFor="email"
                  className="block text-sm font-normal text-white mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email Address"
                  className="w-full bg-[#1F1F29] text-xs text-white font-semibold placeholder:text-[#807F8D] py-2.5 px-2 sm:py-5 sm:px-2.5 rounded-lg sm:rounded-2xl focus:outline-none border border-white"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="">
                <label
                  htmlFor="subject"
                  className="block text-sm text-white font-normal mb-2"
                >
                  Subject
                </label>
                <div className="relative">
                  <button
                    type="button"
                    className="w-full bg-[#1F1F29] text-white text-xs font-semibold py-2.5 px-2 sm:py-5 sm:px-2.5 rounded-lg sm:rounded-2xl focus:outline-none border border-white flex justify-between items-center"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <span>{formData.subject}</span>
                    <ChevronDown />
                  </button>

                  <div
                    className={`absolute z-10 w-full mt-1 bg-[#1F1F29] text-white rounded-lg shadow-lg transition-all duration-300 overflow-hidden ${
                      dropdownOpen
                        ? "max-h-60 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                    style={{
                      transformOrigin: "top",
                      pointerEvents: dropdownOpen ? "auto" : "none",
                    }}
                  >
                    {SubjectOptions.map((option) => (
                      <div
                        key={option}
                        className="px-4 py-2 hover:bg-[#2A2A36] cursor-pointer transition-colors duration-200"
                        onClick={() => handleSubjectSelect(option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="">
                <label
                  htmlFor="description"
                  className="block text-sm text-white font-normal mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  placeholder="Enter specific details of your inquiry. Please be as detailed as possible."
                  className="w-full bg-[#1F1F29] text-xs font-semibold text-white py-2.5 px-2 sm:py-5 sm:px-2.5 rounded-lg placeholder:text-[#807F8D] sm:rounded-2xl focus:outline-none border border-white"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <div className="">
                <label className="block text-xs    text-white font-normal mb-2">
                  Upload an attachment (Optional)
                </label>
                <div
                  className={`border border-dashed border-gray-400 rounded-lg p-3 sm:p-8 text-center flex flex-col items-center gap-1 sm:gap-4 cursor-pointer transition-colors duration-200 ${
                    isDragging ? "bg-[#2A2A36]" : "bg-[#1F1F29]"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={triggerFileInput}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={handleFileChange}
                  />
                  <Upload />
                  <div className="font-light">
                    <div className="text-xs text-white">
                      Drag and Drop Document or{" "}
                      <span className="font-normal">Browse</span>
                    </div>
                    <div className="text-[10px] text-gray-400 mt-1">
                      Supports JPG, PNG (not more than 5 MB)
                    </div>
                  </div>
                  {formData.attachment && (
                    <div className="mt-2 text-green-400 text-sm">
                      {formData.attachment.name}
                    </div>
                  )}
                </div>
                <p className="text-[10px] sm:text-xs text-gray-400 mt-2">
                  Please attach a screenshot of any errors or issues to help us
                  assist you faster. For files over 5 MB or additional images,
                  reply to your support confirmation email.
                </p>
              </div>

              <button
                type="submit"
                className="bg-[#1B0055] mt-1 hover:bg-gray-700 text-white font-medium py-2.5 sm:w-fit px-12 rounded-full focus:outline-none border border-white transition-all duration-200"
                disabled={isSubmitting}
                style={{
                  transform: isSubmitting ? "scale(0.98)" : "scale(1)",
                }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    Submitting...
                  </span>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
      </DirectionAnimation>
      {/* Success Modal */}
      <SuccessModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Add CSS for checkmark animation */}
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes draw {
          0% {
            stroke-dashoffset: 42;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SupportRequestForm;
