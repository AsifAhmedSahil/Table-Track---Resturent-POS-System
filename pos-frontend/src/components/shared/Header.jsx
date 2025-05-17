import React from "react";
import logo from "../../assets/images/table-track1.PNG";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-[#1a1a1a] flex justify-between items-center py-4 px-8">
      {/* logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-12 w-12" />
        <h1 className="text-lg font-semibold text-[#f5f5f5]">Table Track</h1>
      </div>

      {/* search */}
      <div className="flex items-center bg-[#1f1f1f] gap-4 rounded-[15px] px-5 py-2 w-[500px]">
        <FaSearch className="text-[#f5f5f5]" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-[#1f1f1f] text-[#f5f5f5]   focus:outline-none w-full"
        />
      </div>

      {/* logged user */}

      <div className="flex items-center gap-4">
        <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
          <FaBell className="text-[#f5f5f5] text-2xl" />
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <FaUserCircle className="text-[#f5f5f5] text-4xl" />
          <div className="flex flex-col items-start">
            <h1 className="text-[#f5f5f5] text-md">Asif Ahmed</h1>
            <p className="text-[#ababab] text-xs">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
