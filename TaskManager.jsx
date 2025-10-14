import React, { useState, useEffect } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  // Load saved tasks from localStorage when the app starts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() === "") return;
    const newTask = { id: Date.now(), text: input, completed: false };
    setTasks([...tasks, newTask]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks =
    filter === "all"
      ? tasks
      : filter === "active"
      ? tasks.filter((task) => !task.completed)
      : tasks.filter((task) => task.completed);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-8 max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">Task Manager 📝</h2>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new task..."
          className="border border-gray-300 rounded-lg p-2 flex-grow"
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <div className="flex justify-center space-x-2 mb-4">
        <button onClick={() => setFilter("all")} className="text-sm">All</button>
        <button onClick={() => setFilter("active")} className="text-sm">Active</button>
        <button onClick={() => setFilter("completed")} className="text-sm">Completed</button>
      </div>

      <ul className="space-y-2">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-gray-100 p-2 rounded-md"
          >
            <span
              onClick={() => toggleTask(task.id)}
              className={`cursor-pointer ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-600 hover:text-red-800 text-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;