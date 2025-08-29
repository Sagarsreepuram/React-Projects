import React, { useState } from "react";

const Toggle = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "what is an Accordion?",
      answer:
        "An accordion is a UI pattern where content is hidden until expanded.",
    },
    {
      question: "How does this FAQ work?",
      answer: "Click on a question to expand or collapse the answer.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border rounded-2xl shadow-md p-4 bg-white">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center text-left font-semibold text-lg"
          >
            {faq.question}
            <span className="ml-2">{openIndex === index ? "-" : "+"}</span>
          </button>
          {openIndex === index && (
            <p className="mt-2 text-gray-600">{faq.answer} </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Toggle;
