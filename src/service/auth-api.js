import axios from 'axios';

import './api-settings';

const config = {
  headers: {
    'Content-type': 'application/json',
  },
};

// const setToken = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// export const unsetToken = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

const registerUser = async (name, email, password) => {
  const { data } = await axios.post('/api/v1/users/signup', { name, email, password }, config);

  // setToken(data.token);

  return data;
};

const loginUser = async (email, password) => {
  const { data } = await axios.post('/api/v1/users/login', { email, password }, config);
  // setToken(data.token);

  return data;
};

const updateUser = async (user, token) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.post('api/v1/users/profile', user, config);

  return data;
};

const logout = async (user, token) => {};

const api = { loginUser, registerUser, updateUser, logout };

export default api;
