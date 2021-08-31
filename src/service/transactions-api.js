import axios from 'axios';

import './api-settings';

const getTransactions = async () => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  const { data } = await axios.get('/api/v1/transactions');
  return data;
};

const getBalance = async () => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  const { data } = await axios.get('/api/v1/transactions/balance');
  return data;
};

const addTransaction = async transaction => {
  // const config = {
  //   'Content-Type': 'application/json',
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  const { data } = await axios.post('/api/v1/transactions', transaction);

  return data;
};

const deleteTransactionById = async id => {
  await axios.delete(`/api/v1/transactions/${id}`);
};
// export const updateTransaction = async ({ id, transaction, token }) => {
//   const config = {
//     'Content-Type': 'application/json',
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const { data } = await axios.put(`/api/v1/transactions/${id}`, transaction, config);

//   return data;
// };

// export const getTransactionById = async (id, token) => {
//   const config = {
//     'Content-Type': 'application/json',
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const { data } = await axios.get(`/api/v1/transactions/${id}`, config);

//   return data;
// };

// export const deleteMemoById = async (id, token) => {
//   const config = {
//     'Content-Type': 'application/json',
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const { data } = await axios.delete(`/api/v1/transactions/${id}`, config);

//   return data;
// };

const api = { getTransactions, addTransaction, getBalance, deleteTransactionById };

export default api;
