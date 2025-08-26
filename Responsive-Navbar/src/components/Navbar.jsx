import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">NavBar</div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="menu-icon onclick={()=> setIsOpen(!isOpen)}">☰</div>
    </nav>
  );
};

export default Navbar;
