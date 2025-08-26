import React, { useState } from "react";
import Dialog from "./components/Dialog";
import "./index.css";   // ✅ make sure this is imported

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
     <p className="text-3xl font-bold text-red-500">🔥 Tailwind is working!</p>


      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
      >
        Open Modal
      </button>

      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-2xl font-semibold mb-4">Modal Title</h2>
        <p className="text-gray-700 mb-6">
          This is a modal using Tailwind CSS. You can close it by clicking
          outside or pressing the button below.
        </p>
        <button
          onClick={() => setIsOpen(false)}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
        >
          Close
        </button>
      </Dialog>

      <h1 className="text-3xl font-bold underline mt-10">Hello Tailwind!</h1>
    </div>
  );
}

export default App;
