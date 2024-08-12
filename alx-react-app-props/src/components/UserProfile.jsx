import { useContext } from 'react';
import UserContext from '../UserContext'; // Adjust the path if necessary

function UserProfile() {
  // Consume the context
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Age: {userData.age}</p>
      <p>Bio: {userData.bio || 'No bio available'}</p> {/* Handle cases where bio might be missing */}
    </div>
  );
}

export default UserProfile;
