import { createSelector } from '@reduxjs/toolkit';

export const getAllTransactions = state => {
  return state.finance.transactions;
};

export const getAllCategories = state => {
  return state.finance.categories;
};

export const getBalance = state => {
  return state.finance.balance;
};

// export const getFilter = state => state.contacts.filter;

export const getAllSortedTransactions = createSelector([getAllTransactions], transactions => {
  return [...transactions].sort((a, b) => b.date.localeCompare(a.date));
});

// export const getFilteredSortedContacts = createSelector(
//   [getAllContacts, getFilter],
//   (contacts, filter) => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts
//       .filter(({ name }) => name.toLowerCase().includes(normalizedFilter))
//       .sort((a, b) => a.name.localeCompare(b.name));
//   },
// );
