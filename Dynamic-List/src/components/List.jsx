import React, { useState } from "react";

const List = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim() === "") return;
    setItems([...items, inputValue]);
    setInputValue("");
  };

  const handleRemove = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Dynamic List</h1>

      {/* Input + Add button */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border rounded-lg p-2"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {/* List of items */}
      <ul className="w-64">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded-lg shadow"
          >
            <span>{item}</span>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600"
              onClick={() => handleRemove(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
