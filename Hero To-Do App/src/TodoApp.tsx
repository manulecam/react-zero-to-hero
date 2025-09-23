import { useState } from 'react'

import './TodoApp.css'

export default function TodoApp() {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value);
  const addTask = () => {
    if (!task.trim()) return;

    setTasks((prevTasks) => [...prevTasks, task]);
    setTask('');
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Hero To-Do App</h1>
      <input
        value={task}
        onChange={handleOnChange}
        className="border border-gray-300 dark:border-gray-600 rounded px-3 py-2 mr-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        placeholder="Nueva tarea"
      />
      <button onClick={addTask} className="bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600 dark:hover:bg-blue-700">
        Agregar
      </button>
      <ul className='mt-4 space-y-3 max-w-fit'>
        {
          tasks.map((task, index) => (
            <li key={index} className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm flex items-center justify-between gap-3">
              <span className="flex-1 text-left">{task}</span>
              <div className="flex items-center gap-2">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-sm transition-colors duration-200"
                  title="Editar tarea"
                >
                  ✏️
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm transition-colors duration-200"
                  title="Eliminar tarea"
                >
                  ✕
                </button>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
