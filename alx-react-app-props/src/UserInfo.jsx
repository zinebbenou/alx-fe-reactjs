import React from 'react';
import UserDetails from './UserDetails';
import { useUser } from './UserContext';

function UserInfo() {
  const userData = useUser();
  return <UserDetails userData={userData} />;
}

export default UserInfo;
