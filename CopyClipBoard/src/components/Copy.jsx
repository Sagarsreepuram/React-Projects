import { useState } from "react";

export default function CopyToClipboardApp() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (text.trim() === "") return;

    navigator.clipboard.writeText(text);
    setCopied(true);

    // reset after 2 sec
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-md w-96">
        <h1 className="text-xl font-bold mb-4">Copy to Clipboard</h1>
        
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something here..."
          className="w-full p-3 border rounded-lg resize-none"
          rows={4}
        />

        <button
          onClick={handleCopy}
          className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
