import React, { useState } from 'react';
import githubService from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await githubService.fetchUsers(username, location, minRepos);
      setUserData(data.items); // Adjust based on response structure
    } catch (err) {
      setError("Looks like we cant find any users.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" disabled={loading} className="w-full bg-blue-500 text-white p-2 rounded">
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {userData.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl">Search Results:</h2>
          <ul>
            {userData.map(user => (
              <li key={user.id} className="border p-2 my-2">
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                  <img src={user.avatar_url} alt={user.login} className="w-10 h-10 rounded-full" />
                  <span>{user.login}</span> - {user.location || 'No location'} - Repos: {user.public_repos}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;