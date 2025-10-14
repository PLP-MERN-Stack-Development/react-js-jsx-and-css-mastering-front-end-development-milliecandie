import React, { useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`p-4 flex justify-between items-center shadow-md ${darkMode ? "bg-gray-800 text-white" : "bg-blue-600 text-white"}`}>
      <h1 className="text-xl font-bold">Millie Week 3 App</h1>

      <div className="flex items-center space-x-6">
        <ul className="hidden md:flex space-x-6">
          <li className="hover:opacity-75 cursor-pointer">Home</li>
          <li className="hover:opacity-75 cursor-pointer">About</li>
          <li className="hover:opacity-75 cursor-pointer">Contact</li>
        </ul>

        {/* Theme Switch */}
        <button
          onClick={toggleTheme}
          className="bg-white text-blue-600 px-3 py-1 rounded-md text-sm font-semibold hover:bg-gray-200 transition"
        >
          {darkMode ? "Light ☀️" : "Dark 🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;