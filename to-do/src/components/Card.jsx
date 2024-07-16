import React, { useState } from "react";
import { TbPencilExclamation } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

function Card() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    if (currentTask.trim()) {
      setTasks([...tasks, currentTask]);
      setCurrentTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setCurrentTask(tasks[index]); 
  };

  const saveTask = () => {
    if (currentTask.trim() && editIndex !== null) {
      const updatedTasks = tasks.map((task, index) =>
        index === editIndex ? currentTask : task
      );
      setTasks(updatedTasks);
      setEditIndex(null); 
      setCurrentTask(""); 
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTask();
      saveTask();
    }
  };

  return (
    <div className="flex justify-center items-center">
      <article className="rounded-xl border border-gray-700 bg-gray-800 dark:bg-gray-300 p-4 w-[100%] sm:w-[100%] max-h-[80vh] overflow-y-auto article-container">
        <div className="flex items-center gap-4">
          <img
            alt=""
            src="https://freesvg.org/img/abstract-user-flat-4.png"
            className="size-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-medium text-white dark:text-black">
              Personal Tasks
            </h3>
          </div>
        </div>

        <div className="textarea m-5">
          <label htmlFor="text">
            <input
              type="text"
              className=" w-[12rem] sm:w-[20rem] h-9 rounded-lg"
              value={currentTask}
              onChange={(e) => setCurrentTask(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </label>
          {editIndex !== null ? (
            <button
              onClick={saveTask}
              className="text-xl inline ml-2 bg-gray-100 dark:bg-gray-800 dark:text-white p-[3px] sm:p-1 rounded-md font-semibold"
            >
              Save Task
            </button>
          ) : (
            <button
              onClick={addTask}
              className="text-xl inline ml-2 bg-gray-100 dark:bg-gray-800 dark:text-white p-[3px] sm:p-1 rounded-md font-semibold"
            >
              Add Task
            </button>
          )}
        </div>

        <ul className="mt-4 space-y-2">
          {tasks.map((task, index) => (
            <li key={index}>
              <div className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600 dark:hover:border-orange-400">
                <div className="flex items-center justify-between">
                  <strong className="font-medium text-white dark:text-black">
                    {`${index + 1}. ${task}`}
                  </strong>
                  <div className="flex items-center space-x-2">
                    <TbPencilExclamation 
                    className="text-2xl" 
                    onClick={() => startEditing(index)}
                    />
                    <MdDelete
                      className="text-2xl cursor-pointer"
                      onClick={() => deleteTask(index)}
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}

export default Card;
