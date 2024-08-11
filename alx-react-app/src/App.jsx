// src/App.jsx
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';  // Import the WelcomeMessage component
import Header from './components/Header';                  // Import the Header component
import MainContent from './components/MainContent';        // Import the MainContent component
import Footer from './components/Footer';                  // Import the Footer component

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />            {/* Include the Header component */}
      <MainContent />      {/* Include the MainContent component */}
      <WelcomeMessage />   {/* Include the WelcomeMessage component */}
      <Footer />           {/* Include the Footer component */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
