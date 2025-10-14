import React from "react";

const Button = ({ label, variant = "primary", onClick }) => {
  const baseStyle = "px-4 py-2 rounded-md font-semibold focus:outline-none transition duration-200";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]}`}>
      {label}
    </button>
  );
};

export default Button;