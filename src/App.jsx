import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-lg sm:max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">
          To-Do List
        </h1>

        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a new task..."
            className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-full sm:w-auto"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.map((t, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row justify-between items-center bg-gray-200 p-2 rounded-lg"
            >
              <span className="break-words w-full sm:max-w-xs text-center sm:text-left">
                {t}
              </span>
              <button
                onClick={() => removeTask(index)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition mt-2 sm:mt-0"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
