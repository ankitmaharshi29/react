import React, { useState } from 'react';
import { LOGO_URL } from '../utils/constant';
import { Link } from 'react-router-dom';

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <header className="bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={LOGO_URL}
            alt="App Logo"
            className="w-32 h-auto object-contain"
          />
        </div>

        {/* Navigation Section */}
        <nav className="hidden md:flex space-x-6">
          <Link
            className="hover:text-yellow-200 transition-colors text-lg font-semibold"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-yellow-200 transition-colors text-lg font-semibold"
            to="/about"
          >
            About Us
          </Link>
          <Link
            className="hover:text-yellow-200 transition-colors text-lg font-semibold"
            to="/contact"
          >
            Contact Us
          </Link>
          <Link
            className="hover:text-yellow-200 transition-colors text-lg font-semibold"
            to="/cart"
          >
            Cart
          </Link>
        </nav>

        {/* Login/Logout Button */}
        <button
          className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
          onClick={() => {
            setBtnName(btnName === "Login" ? "Logout" : "Login");
          }}
        >
          {btnName}
        </button>
      </div>
    </header>
  );
};

export default Header;
