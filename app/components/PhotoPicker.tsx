"use client";

import { useState, useRef, ChangeEvent, MouseEvent } from "react";
import Image from "next/image";
import { CloudUpload, X } from "lucide-react"; 

export default function PhotoPicker() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);

      // Create a temporary HTMLImageElement to read pixel dimensions
      const img = document.createElement("img");
      img.src = objectUrl;
      img.onload = () => {
        setDimensions({
          width: img.naturalWidth,
          height: img.naturalHeight,
        });
      };
    }
  };

  const triggerPicker = () => {
    fileInputRef.current?.click();
  };

  const clearSelection = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); 
    setPreviewUrl(null);
    setSelectedFile(null);
    setDimensions(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="flex flex-col items-start gap-4">
      {/* Hidden file input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Styled Container / Clickable Zone */}
      <div
        onClick={!previewUrl ? triggerPicker : undefined}
        style={{ width: 600, height: 600 }}
        className="mt-10 ml-5 px-4 py-2 bg-gray-100 rounded-xl items-center justify-center align-middle flex flex-col gap-2 cursor-pointer hover:bg-gray-200 transition-colors relative overflow-hidden group"
      >
        {!previewUrl ? (
          <>
            <CloudUpload size={28} className="text-gray-500" />
            <p className="text-xl text-gray-500">Add a photo</p>
          </>
        ) : (
          <>
            {/* Live Preview Image filling the container */}
            <Image
              src={previewUrl}
              alt="Selected preview"
              fill
              className="object-cover rounded-xl"
              unoptimized
            />

            {/* Hover overlay with a remove button */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button
                onClick={clearSelection}
                className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full flex items-center gap-2 font-medium shadow-md transition-transform transform hover:scale-105"
              >
                <X size={20} />
                <span>Remove Photo</span>
              </button>
            </div>
          </>
        )}
      </div>

      {/* File metadata display including dimensions */}
      {selectedFile && (
        <p className="ml-5 text-sm text-gray-500">
          Selected: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(1)} KB)
          {dimensions && ` ${dimensions.width}x${dimensions.height}`}
        </p>
      )}
    </div>
  );
}
