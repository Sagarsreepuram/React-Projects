import React, { useState } from "react";

const Render = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build Projects" },
    { id: 3, text: "Master JavaScript" },
  ]);
  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4"> List with Unique Keys</h1>

      <ul className="1.5rem">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded-lg shadow"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Render;
