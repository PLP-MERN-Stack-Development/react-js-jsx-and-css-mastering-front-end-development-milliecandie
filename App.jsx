import React from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Card from "./components/Card";
import TaskManager from "./components/TaskManager";
import ApiData from "./components/ApiData";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="p-6 text-center space-y-6">
        <h2 className="text-2xl font-semibold text-blue-700">
          Welcome to My Week 3 React App 💖
        </h2>

        {/* Buttons Section */}
        <div className="flex justify-center space-x-4">
          <Button label="Primary" variant="primary" />
          <Button label="Secondary" variant="secondary" />
          <Button label="Danger" variant="danger" />
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <Card title="Task Manager" content="Manage your daily tasks easily." />
          <Card title="API Integration" content="Fetch and display data seamlessly." />
          <Card title="Tailwind Styling" content="Create responsive designs quickly." />
        </div>

        {/* Task Manager Component */}
        <TaskManager />

        {/* API Data Component */}
        <ApiData />
      </div>
    </div>
  );
}

export default App;