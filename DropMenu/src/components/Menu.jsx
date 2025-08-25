import React, { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="releative inline-block">
      <button
        onClick={toggleMenu}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Menu
      </button>
      {isOpen && (
        <ul className="absolute mt-2 w-40 bg-white border rounded shadow-lg">
          <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Item 1</li>
          <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Item 2</li>
          <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Item 3</li>
        </ul>
      )}
    </div>
  );
};

export default Menu;
