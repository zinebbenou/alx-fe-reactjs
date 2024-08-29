import React, { useState } from 'react';

const RegistrationForm = () => {
  // State variables to handle form input values
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handlers to update state based on input changes
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation to ensure no fields are empty
    if (!username || !email || !password) {
      alert('All fields are required.');
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', { username, email, password });
  };

  // Render the form with controlled input fields
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}          // Controlled value
          onChange={handleUsernameChange}  // Update state on change
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}             // Controlled value
          onChange={handleEmailChange}   // Update state on change
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}          // Controlled value
          onChange={handlePasswordChange}  // Update state on change
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
