"use client"; 
import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    validateFile(selectedFile);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    validateFile(droppedFile);
  };

  const validateFile = (selectedFile?: File) => {
    if (!selectedFile) return;
    if (!["image/jpeg", "image/png"].includes(selectedFile.type)) {
      setError("Only JPG and PNG files are allowed");
      setFile(null);
      return;
    }
    if (selectedFile.size > 3.5 * 1024 * 1024) {
      setError("File size must be less than 3.5MB");
      setFile(null);
      return;
    }
    setFile(selectedFile);
    setError("");
  };

  return (
    <div className="space-y-2">
      <label className=" text-white">Upload an attachment (Optional)</label>

      <div
        className="w-[65%] border-2 border-dotted border-gray-500 rounded-lg p-6 text-center bg-[#06020E] text-white"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <FiUploadCloud className="mx-auto text-2xl text-gray-400" />
        {file ? (
          <p className="mt-2">{file.name}</p>
        ) : (
          <p className="mt-2 text-gray-400">
            <span className="font-semibold">Drag and Drop Document or Browse</span>
            <br />
            <span className="text-xs">Supports JPG, PNG (Not more than 3.5MB)</span>
          </p>
        )}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>

      <input type="file" className="hidden" id="file-upload" onChange={handleFileChange} />

    </div>
  );
}
