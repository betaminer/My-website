import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  accept: string;
  label: string;
}

export default function FileUpload({ onFileSelect, accept, label }: FileUploadProps) {
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) onFileSelect(file);
  }, [onFileSelect]);

  return (
    <div 
      className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <label className="block mt-4 cursor-pointer">
        <span className="text-sm text-gray-600">{label}</span>
        <input
          type="file"
          className="hidden"
          accept={accept}
          onChange={(e) => e.target.files?.[0] && onFileSelect(e.target.files[0])}
        />
      </label>
    </div>
  );
}