"use client";

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function ReadmeEditor() {
  // State untuk menyimpan teks markdown
  const [markdown, setMarkdown] = useState<string>(
    "# Judul Proyek\n\nTulis deskripsi proyek Anda di sini..."
  );

  // Fungsi untuk mengunduh file .md
  const downloadReadme = () => {
    const element = document.createElement("a");
    const file = new Blob([markdown], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "README.md";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="p-4 bg-white border-b flex justify-between items-center shadow-sm">
        <h1 className="text-xl font-bold text-blue-600">README Builder TS</h1>
        <button 
          onClick={downloadReadme}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
        >
          Download .md
        </button>
      </header>

      {/* Editor & Preview Container */}
      <main className="flex flex-1 overflow-hidden">
        
        {/* Sisi Kiri: Editor */}
        <div className="w-1/2 border-r flex flex-col">
          <div className="bg-gray-100 px-4 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Markdown Editor
          </div>
          <textarea
            className="w-full h-full p-4 resize-none focus:outline-none font-mono text-sm"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Ketik markdown di sini..."
          />
        </div>

        {/* Sisi Kanan: Preview */}
        <div className="w-1/2 flex flex-col bg-white">
          <div className="bg-gray-100 px-4 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Preview
          </div>
          <div className="p-8 overflow-y-auto prose prose-slate max-w-none">
            {/* Library ini mengubah string markdown menjadi elemen HTML */}
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
        
      </main>
    </div>
  );
}