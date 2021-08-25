import axios from 'axios';

import './api-settings';

export const getCategories = async () => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  const { data } = await axios.get('/api/v1/categories');
  console.log('data from api :>> ', data);

  return data;
};

export const addCategory = async (category, token) => {
  const config = {
    'Content-Type': 'application/json',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.post('/api/v1/categories/add', category, config);

  return data;
};

export const updateCategory = async ({ id, category, token }) => {
  const config = {
    'Content-Type': 'application/json',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.put(`/api/v1/categories/${id}`, category, config);

  return data;
};

export const getTransactionById = async (id, token) => {
  const config = {
    'Content-Type': 'application/json',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(`/api/v1/categories/${id}`, config);

  return data;
};

export const deleteCategoryById = async (id, token) => {
  const config = {
    'Content-Type': 'application/json',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.delete(`/api/v1/categories/${id}`, config);

  return data;
};
