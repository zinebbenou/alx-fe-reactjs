import React from 'react';
import './App.css';
import Search from './components/Search'; // Import the Search component

function App() {
  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <Search /> {/* Add the Search component here */}
    </div>
  );
}

export default App;