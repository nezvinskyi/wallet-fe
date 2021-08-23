import axios from 'axios';

import './api-settings';

export const getTransactions = async token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get('/api/v1/transactions', config);

  return data;
};

export const addTransaction = async (transaction, token) => {
  const config = {
    'Content-Type': 'application/json',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.post('/api/v1/memos/add', transaction, config);

  return data;
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
