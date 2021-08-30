import { createSelector } from '@reduxjs/toolkit';

export const getAllTransactions = state => {
  return state.finance.transactions;
};

export const getAllCategories = state => {
  return state.finance.categories;
};

export const categoriesForAddTrForm = state => {
  const arr = state.finance.categories;
  const newArr = arr.map(item => ({
    ...item,
    label: item.name,
    value: item._id,
  }));

  return newArr;
};

export const getBalance = state => {
  return state.finance.balance;
};

// export const getFilter = state => state.contacts.filter;

export const getAllSortedTransactions = createSelector([getAllTransactions], transactions => {
  return [...transactions].sort((a, b) => b.date.localeCompare(a.date));
});

export const getFilterValue = state => state.finance.filter;

export const getFilteredTransactions = createSelector(
  [getAllTransactions, getFilterValue],
  (allTransactions, selectedYear) => {
   
    return allTransactions
      .filter((transaction) => {
        return transaction.year.includes(selectedYear)
      })
      .sort((a, b) => a.date.localeCompare(b.date));
  },
);
