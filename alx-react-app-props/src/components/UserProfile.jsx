import React, { useContext } from 'react';
import UserContext from '../UserContext'; // Import UserContext

function UserProfile() {
  const { name, age, bio } = useContext(UserContext); // Use context to get user data

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Bio: {bio}</p>
    </div>
  );
}

export default UserProfile;
