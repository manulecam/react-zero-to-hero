import { useState } from 'react'

import './TodoApp.css'

type Task = {
  id: string;
  text: string;
}

export default function TodoApp() {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value);

  const deleteTask = (id: string) => setTasks(tasks.filter((task) => task.id !== id))

  const addTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const handleAddTask = (task: string) => {
    if (!task.trim()) return;

    const newTask: Task = { id: crypto.randomUUID(), text: task };

    addTask(newTask);
    setTask('');
  }

  return (
    <div className="p-8 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-purple-400 animate-pulse">
          Hero To-Do App
        </h1>
        
        <div className="flex gap-3 mb-8">
          <input
            value={task}
            onChange={handleOnChange}
            className="flex-1 border border-purple-500/30 rounded-xl px-5 py-3 bg-gray-800/50 backdrop-blur-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 hover:bg-gray-800/70"
            placeholder="Nueva tarea..."
            onKeyDown={(e) => e.key === 'Enter' && handleAddTask(task)}
          />
          <button 
            onClick={() => handleAddTask(task)} 
            className="bg-purple-600 text-white px-8 py-3 rounded-xl hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 font-medium"
          >
            Agregar
          </button>
        </div>
        
        <ul className='space-y-3'>
          {
            tasks.map((task, index) => (
              <li 
                key={task.id} 
                className="bg-gray-800/30 backdrop-blur-sm text-gray-100 px-6 py-4 rounded-2xl border border-purple-500/20 shadow-xl hover:shadow-purple-500/20 flex items-center justify-between gap-4 transform transition-all duration-500 hover:scale-[1.02] hover:bg-gray-800/50"
                style={{
                  animation: `slideIn 0.3s ease-out ${index * 0.05}s`,
                  animationFillMode: 'both'
                }}
              >
                <span className="flex-1 text-left text-lg">{task.text}</span>
                <div className="flex items-center gap-2">
                  <button
                    className="bg-violet-600 hover:bg-violet-700 text-white px-3 py-2 rounded-lg text-sm transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-violet-500/30"
                    title="Editar tarea"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-red-500/30"
                    title="Eliminar tarea"
                  >
                    ✕
                  </button>
                </div>
              </li>
            ))
          }
        </ul>
        
        {tasks.length === 0 && (
          <div className="text-center mt-20 text-purple-400/60 text-lg animate-pulse">
            No hay tareas pendientes ✨
          </div>
        )}
      </div>
    </div>
  )
}