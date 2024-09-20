const fetchUsers = async (username, location, minRepos) => {
  const query = `${username} ${location ? `location:${location}` : ''} ${minRepos ? `repos:>${minRepos}` : ''}`.trim();
  const response = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};

export default { fetchUsers };