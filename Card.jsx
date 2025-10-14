import React from "react";

const Card = ({ title, content }) => {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white shadow-md rounded-lg p-4 hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
      <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{content}</p>
    </div>
  );
};

export default Card;