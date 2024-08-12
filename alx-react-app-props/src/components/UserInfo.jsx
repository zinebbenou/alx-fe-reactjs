// src/components/UserInfo.jsx
import React from 'react';
import UserDetails from './UserDetails';
import { useUser } from '../UserContext'; // Import useUser hook

function UserInfo() {
  const userData = useUser(); // Get userData from context

  return <UserDetails />; // No need to pass userData as a prop
}

export default UserInfo;
