import axios from 'axios';

import './api-settings';

export const getCategories = async () => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  const { data } = await axios.get('/api/v1/categories');

  return data;
};

export const addCategory = async category => {
  // const config = {
  //   'Content-Type': 'application/json',
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  const { data } = await axios.post('/api/v1/categories/add', category);

  return data;
};

export const updateCategory = async ({ id, category }) => {
  // const config = {
  //   'Content-Type': 'application/json',
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  const { data } = await axios.put(`/api/v1/categories/${id}`, category);

  return data;
};

export const getTransactionById = async id => {
  // const config = {
  //   'Content-Type': 'application/json',
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  const { data } = await axios.get(`/api/v1/categories/${id}`);

  return data;
};

export const deleteCategoryById = async id => {
  // const config = {
  //   'Content-Type': 'application/json',
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  const { data } = await axios.delete(`/api/v1/categories/${id}`);

  return data;
};
