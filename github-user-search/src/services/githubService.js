import axios from 'axios';

const fetchUsers = async (username, location, minRepos) => {
  const query = `${username}${location ? `+location:${location}` : ''}${minRepos ? `+repos:>${minRepos}` : ''}`;
  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return response.data;
};

export default { fetchUsers };