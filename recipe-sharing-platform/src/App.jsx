import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background-dark text-text-dark">
      <div className="flex gap-8 mb-8">
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="w-20 h-20" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="w-20 h-20" alt="React logo" />
        </a>
      </div>
      <h1 className="text-h1 font-bold mb-4">Vite + React</h1>
      <div className="card bg-gray-800 text-white p-6 rounded-lg shadow-lg">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-button-background-dark text-white px-4 py-2 rounded border border-transparent hover:border-primary transition-border"
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code className="bg-gray-700 p-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-4 text-gray-400">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
