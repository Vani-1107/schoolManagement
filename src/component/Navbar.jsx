import React from 'react';
import '../index.css';
import { HiBars3 } from "react-icons/hi2";
import { MdFullscreen } from "react-icons/md";
import { LuGrid } from "react-icons/lu";
import { FaEarthAmericas } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { CiFlag1 } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-4 bg-gradient-to-r from-cyan-200 to-cyan-100 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img src="path/to/logo.png" alt="Logo" className="h-8" />
        <h1 className="text-xl font-semibold text-red-600">Ramom<span className="text-blue-600">School</span></h1>
      </div>

      {/* Center Icons */}
      <div className="flex mr-8 space-x-4">
        <div className="diamond-icon">
          <HiBars3 />
        </div>
        <div className="diamond-icon">
          <MdFullscreen />
        </div>
        <div className="diamond-icon">
          <LuGrid />
        </div>
      </div>

      {/* Search Box */}
      <div className="relative" style={{ width: '15vw', marginRight: '4rem' }}>
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-1 pr-10 text-gray-600 border border-gray-300 rounded-full focus:outline-none focus:border-blue-400"
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <CiSearch />
        </button>
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-4 ml-4">
        <div className="diamond-icon">
          <FaEarthAmericas />
        </div>
        <div className="diamond-icon">
          <SlCalender />
        </div>
        <div className="diamond-icon">
          <CiFlag1 />
        </div>
        <div className="diamond-icon">
          <FaRegBell />
        </div>
      </div>

      {/* Profile Picture */}
      <div className="flex items-center ml-4">
        <FaUser className="w-6 h-6 text-gray-500" />
      </div>
    </nav>
  );
}

export default Navbar;
