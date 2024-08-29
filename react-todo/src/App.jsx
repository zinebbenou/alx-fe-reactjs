import React from 'react';
import TodoList from './components/TodoList'; // Import the TodoList component
import './App.css'; // Make sure to keep the CSS import if needed

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList /> {/* Render the TodoList component */}
      </header>
    </div>
  );
}

export default App;
