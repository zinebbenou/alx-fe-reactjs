// src/components/UserDetails.jsx
import React from 'react';
import { useUser } from '../UserContext'; // Import useUser hook

function UserDetails() {
  const userData = useUser(); // Get userData from context

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
