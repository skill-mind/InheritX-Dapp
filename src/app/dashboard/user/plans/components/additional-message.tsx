"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Trash2, Upload, Search, Check, File } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { BeneficiaryShotDesc, FileItem } from "@/lib/types";



export default function AdditionalMessages() {
  const [files, setFiles] = useState<(FileItem | null)[]>([
    {
      id: "file-1",
      name: "estate_plan_instructions.pdf",
      size: 1024000,
      type: "application/pdf",
      recipients: ["all"],
    },
    null,
    null,
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [beneficiaries, setBeneficiaries] = useState<BeneficiaryShotDesc[]>([
    { id: "1", name: "Daniel Olayinka", selected: true },
    { id: "2", name: "Stephen Jack", selected: true },
    { id: "3", name: "Sophia Collins", selected: false },
    { id: "4", name: "Emma Thompson", selected: false },
    { id: "5", name: "Michael Chen", selected: false },
  ]);

  const fileInputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    const newFile: FileItem = {
      id: `file-${Date.now()}-${index}`,
      name: selectedFile.name,
      size: selectedFile.size,
      type: selectedFile.type,
      recipients: ["all"], // Default to all beneficiaries
    };

    const newFiles = [...files];
    newFiles[index] = newFile;
    setFiles(newFiles);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];

      const newFile: FileItem = {
        id: `file-${Date.now()}-${index}`,
        name: droppedFile.name,
        size: droppedFile.size,
        type: droppedFile.type,
        recipients: ["all"], // Default to all beneficiaries
      };

      const newFiles = [...files];
      newFiles[index] = newFile;
      setFiles(newFiles);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const deleteFile = (index: number) => {
    const newFiles = [...files];
    newFiles[index] = null;
    setFiles(newFiles);
  };

  const assignRecipientsToFile = (index: number, recipientIds: string[]) => {
    if (!files[index]) return;

    const newFiles = [...files];
    if (newFiles[index]) {
      newFiles[index] = { ...newFiles[index]!, recipients: recipientIds };
      setFiles(newFiles);
    }
  };

  const filteredBeneficiaries = beneficiaries.filter((beneficiary) =>
    beneficiary.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getSelectedBeneficiaryNames = (recipientIds: string[]) => {
    if (recipientIds.includes("all")) return "All Beneficiaries";

    if (recipientIds.length === 0) return "";

    const selectedNames = beneficiaries
      .filter((b) => recipientIds.includes(b.id))
      .map((b) => b.name);

    if (selectedNames.length <= 2) {
      return selectedNames.join(", ");
    }

    return `${selectedNames[0]}, ${selectedNames[1]}, +${
      selectedNames.length - 2
    } more`;
  };

  const handleSubmit = () => {
    console.log("Form submitted", { files, beneficiaries });
    // Here you would handle the form submission
  };

  // Function to render file upload or display
  const renderFileSlot = (index: number) => {
    const file = files[index];

    if (file) {
      return (
        <div className="space-y-2 bg-[#16151C] rounded-[10px] px-3 py-4 border border-[#413F54]">
          <div className="bg-[#363546] text-white h-[54px] rounded-2xl flex items-center justify-between p-2">
            <div className="flex items-center">
              <File className="h-4 w-4 mr-2 text-gray-400" />
              <span className="text-xs sm:text-sm truncate max-w-[150px] sm:max-w-[200px]">
                {file.name}
              </span>
            </div>
            <button
              type="button"
              onClick={() => deleteFile(index)}
              className="text-gray-400 hover:text-red-400"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-gray-400">Send to</label>
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className="bg-[#21202A] border-[#D9D9DD] border text-white h-[54px] rounded-2xl w-full flex items-center justify-between px-2 py-1.5 text-left text-xs sm:text-sm"
                >
                  <span className="truncate">
                    {getSelectedBeneficiaryNames(file.recipients)}
                  </span>
                  <svg
                    className="h-3 w-3 opacity-50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0 bg-gray-800 border-gray-700 text-white">
                <div className="p-2">
                  <div className="flex items-center border border-gray-700 rounded-md px-2 py-1.5 mb-2">
                    <Search className="h-3 w-3 mr-2 text-gray-400" />
                    <Input
                      placeholder="Search for beneficiaries"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="border-0 bg-transparent p-0 text-xs focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                  <div
                    className="flex items-center justify-between px-2 py-1.5 cursor-pointer hover:bg-gray-700 rounded-md"
                    onClick={() => assignRecipientsToFile(index, ["all"])}
                  >
                    <div className="text-xs sm:text-sm font-medium">
                      All Beneficiaries
                    </div>
                    {file.recipients.includes("all") && (
                      <Check className="h-3 w-3 text-green-500" />
                    )}
                  </div>
                  <div className="text-xs text-gray-400 px-2 py-1 mt-1">
                    Individual Beneficiaries
                  </div>
                  <div className="max-h-40 overflow-auto">
                    {filteredBeneficiaries.map((beneficiary) => {
                      const isSelected = file.recipients.includes(
                        beneficiary.id
                      );
                      return (
                        <div
                          key={beneficiary.id}
                          className="flex items-center justify-between px-2 py-1.5 cursor-pointer hover:bg-gray-700 rounded-md"
                          onClick={() => {
                            // If "all" is currently selected, remove it
                            let newRecipients = file.recipients.filter(
                              (id) => id !== "all"
                            );

                            if (isSelected) {
                              newRecipients = newRecipients.filter(
                                (id) => id !== beneficiary.id
                              );
                            } else {
                              newRecipients.push(beneficiary.id);
                            }

                            assignRecipientsToFile(index, newRecipients);
                          }}
                        >
                          <div className="text-xs sm:text-sm font-medium">
                            {beneficiary.name}
                          </div>
                          {isSelected && (
                            <Check className="h-3 w-3 text-green-500" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="text-xs text-gray-400 mb-1">File {index + 1}</div>
        <div
          className="border border-gray-700 border-dashed rounded-lg p-3 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-800/50 transition-colors h-[80px] min-h-[130px]"
          onDrop={(e) => handleDrop(e, index)}
          onDragOver={handleDragOver}
          onClick={() => fileInputRefs[index].current?.click()}
        >
          <input
            type="file"
            ref={fileInputRefs[index]}
            className="hidden"
            onChange={(e) => handleFileChange(e, index)}
          />
          <Upload className="h-5 w-5 mb-1 text-gray-400" />
          <p className="text-xs font-medium">
            Drag and Drop Document or{" "}
            <span className="text-blue-400">Browse</span>
          </p>
          <p className="text-[10px] text-gray-500">
            Supports JPG, PNG, PDF, DOC/DOCX files
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="w-full  bg-[#21202A] border border-[#413F54] rounded-2xl p-4 text-white">
        <div className="p-4">
          <div className="text-center mb-4">
            <h2 className="text-lg font-semibold">
              Send Additional Messages (Optional)
            </h2>
            <p className="text-xs text-gray-400">
              Send each heir a file to Estate Allies
            </p>
          </div>

          <div className="space-y-4 mb-6">
            {renderFileSlot(0)}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-center">
              {renderFileSlot(1)}
              {renderFileSlot(2)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
