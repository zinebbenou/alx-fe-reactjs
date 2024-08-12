import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Adjust the path if necessary
import { UserProvider } from './UserContext'; // Adjust the path if necessary

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
