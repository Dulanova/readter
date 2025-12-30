"use client";

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
// Import highlighter dan temanya
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Definisi tipe untuk template
type Template = {
  label: string;
  content: string;
};

const TEMPLATES: Template[] = [
  { label: "🚀 Project Header", content: "# Project Name\nBrief description of what this project does.\n\n" },
  { label: "📦 Installation", content: "## Installation\n\n```bash\nnpm install my-project\n```\n\n" },
  { label: "💻 Usage", content: "## Usage\n\n```typescript\nimport { feature } from 'my-project';\n\nfeature();\n```\n\n" },
  { label: "📜 License", content: "## License\n\nDistributed under the MIT License. See `LICENSE` for more information.\n\n" },
  { label: "🤝 Contributing", content: "## Contributing\n\nContributions are what make the open source community such an amazing place to learn, inspire, and create.\n\n" },
];

export default function ReadmeEditor() {
  const [markdown, setMarkdown] = useState<string>("");

  // Fungsi untuk menambah template ke editor
  const addTemplate = (content: string) => {
    setMarkdown((prev) => prev + content);
  };

  const downloadReadme = () => {
    const element = document.createElement("a");
    const file = new Blob([markdown], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "README.md";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="p-4 bg-white border-b flex justify-between items-center shadow-sm">
        <h1 className="text-xl font-bold text-blue-600">README Builder Pro</h1>
        <button onClick={downloadReadme} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
          Download .md
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* SIDEBAR: Section Templates */}
        <aside className="w-64 bg-slate-900 border-r p-4 overflow-y-auto">
          <h2 className="text-sm font-bold text-gray-400 uppercase mb-4 tracking-widest">Templates</h2>
          <div className="space-y-2">
            {TEMPLATES.map((t, index) => (
              <button
                key={index}
                onClick={() => addTemplate(t.content)}
                className="w-full text-left p-3 text-sm bg-gray-50 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 rounded-lg transition-all font-medium"
              >
                {t.label}
              </button>
            ))}
          </div>
          <p className="mt-8 text-xs text-gray-400 italic">
            Klik tombol di atas untuk menambah bagian ke editor.
          </p>
        </aside>

        {/* MAIN EDITOR */}
        <main className="flex flex-1 overflow-hidden">
          <div className="w-1/2 border-r flex flex-col">
            <textarea
              className="w-full h-full p-6 resize-none focus:outline-none font-mono text-sm leading-relaxed"
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              placeholder="Mulai menulis atau pilih template di samping..."
            />
          </div>

          {/* PREVIEW */}
          <div className="w-1/2 bg-white overflow-y-auto p-10 prose prose-blue max-w-none">
            {markdown ? (
              <ReactMarkdown
                components={{
                  code({ node, inline, className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={vscDarkPlus}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {markdown}
              </ReactMarkdown>
            ) : (
              <div className="text-gray-300 flex items-center justify-center h-full italic">
                Preview akan muncul di sini...
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}