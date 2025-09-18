import './TodoApp.css'

export default function TodoApp() {

  return (
    <>
      <div className="p-4 bg-gray-100 dark:bg-gray-900 min-h-screen">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Hero To-Do App</h1>
        <input
          className="border border-gray-300 dark:border-gray-600 rounded px-3 py-2 mr-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          placeholder="Nueva tarea"
        />
        <button className="bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600 dark:hover:bg-blue-700">
          Agregar
        </button>
      </div>
    </>
  )
}