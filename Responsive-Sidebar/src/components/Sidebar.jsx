import React, { useState } from 'react';
import { Menu, X, Home, User, Settings } from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", icon: <Home size={20} /> },
    { name: "Profile", icon: <User size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-5 transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 w-60`}
      >
        <h1 className="text-2xl font-bold mb-8">Responsive Bar</h1>
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer"
            >
              {item.icon}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        {/* Top Navbar */}
        <div className="flex items-center bg-gray-100 p-4 shadow-md">
          <button
            className="md:hidden mr-4"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h2 className="text-xl font-semibold">Dashboard</h2>
        </div>

        {/* Page Content */}
        <div className="p-6">
          <p>Welcome to Responsive Navbar 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
