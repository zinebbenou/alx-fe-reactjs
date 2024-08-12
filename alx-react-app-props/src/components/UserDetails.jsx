// src/components/UserDetails.jsx
import React from 'react';
import { useUser } from '../UserContext'; // Adjust the path if needed

function UserDetails() {
  const userData = useUser();

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
