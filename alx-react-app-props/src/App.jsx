import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import UserContext from './UserContext'; // Import the UserContext

function App() {
  const [count, setCount] = useState(0);

  // Define the user data you want to provide through context
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    age: 30,
    bio: "Loves hiking and photography", // Add bio if you want it available in UserProfile
  };

  return (
    <UserContext.Provider value={userData}> {/* Provide the context */}
      <Header />
      <MainContent />
      <WelcomeMessage />
      <UserProfile />
      <Footer />
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
    </UserContext.Provider>
  );
}

export default App;
