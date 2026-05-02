import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            JKM <span className="text-blue-600">Electric</span>
          </h1>
          <p className="text-xs text-gray-500">Automobiles Pvt Ltd</p>
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/dealership">Dealership</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <a
          href="https://wa.me/918447828772"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold"
        >
          Get Quote
        </a>

      </div>
    </header>
  );
}

export default Navbar;