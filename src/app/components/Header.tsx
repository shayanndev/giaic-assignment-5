// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#A29875] text-white py-4 px-10 flex justify-between items-center">
      <div className="text-xl font-bold">MANZZARI</div>
      <nav>
        <ul className="flex space-x-4">
          {/* Uncomment the links you want to use */}
          {/* <li><a href="#home" className="hover:text-gray-400">Home</a></li> */}
          {/* <li><a href="#about" className="hover:text-gray-400">About</a></li> */}
          {/* <li><a href="#services" className="hover:text-gray-400">Services</a></li> */}
          {/* <li><a href="#contact" className="hover:text-gray-400">Contact</a></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
