import React, { useState } from 'react';
import '../App.css';

export default function Notepad() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const [secs, setSecs] = useState();
  const [mins, setMins] = useState();
  const [hours, setHours] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const time = new Date();
    setSecs(time.getSeconds());
    setMins(time.getMinutes());
    setHours(time.getHours());

    if (inputValue.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, inputValue.trim()]);
      setInputValue('');
    }
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1 className="text-xl font-bold mb-4 text-center text-white">To-Do List</h1>
      <div className="flex justify-center">
        <form id="form" onSubmit={handleSubmit} className="w-80">
          <div className="flex mb-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-grow rounded p-2 border-2 border-black w-80"
              placeholder="Enter a task..."
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-2xl focus:outline-none"
            >
              <span className="text-2xl">+</span>
            </button>
          </div>
        </form>
      </div>
      <ul className="flex flex-col justify-center items-center space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="shadow-lg rounded p-4 m-4 bg-black opacity-50 border-black hover:border-green-300 hover:opacity-100 hover:border-2 w-80"
            style={{ color: '#03e9f4' }}
          >
            <span>Time - {hours}h:{mins}m:{secs}s {task}</span>
            <button
              className="bg-red-500 text-white rounded-md px-2 py-2 ml-8"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
