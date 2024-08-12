// src/components/ProfilePage.jsx
import React from 'react';
import UserInfo from './UserInfo';
import { useUser } from '../UserContext'; // Import useUser hook

function ProfilePage() {
  const userData = useUser(); // Get userData from context

  return <UserInfo />; // No need to pass userData as a prop
}

export default ProfilePage;
