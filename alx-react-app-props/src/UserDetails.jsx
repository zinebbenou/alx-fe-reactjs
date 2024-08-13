import React from 'react';
import { useUser } from './UserContext';

function UserDetails() {
  const userData = useUser(); // Use the context

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
