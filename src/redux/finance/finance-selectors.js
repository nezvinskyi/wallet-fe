import { createSelector } from '@reduxjs/toolkit';

export const getAllTransactions = state => {
  return state.finance.transactions;
};

export const getAllCategories = state => {
  return state.finance.categories;
};

export const categoriesForAddTrForm = state => {
  return getAllCategories(state).map(category => ({
    ...category,
    label: category.name,
    value: category._id,
  }));
};

export const getBalance = state => {
  return state.finance.balance;
};

// export const getFilter = state => state.contacts.filter;

export const getAllSortedTransactions = createSelector([getAllTransactions], transactions => {
  return [...transactions].sort((a, b) => b.date.localeCompare(a.date));
});

export const getFilter = state => state.finance.filter;

export const getFilteredTransactions = createSelector(
  [getAllTransactions, getFilter],
  (allTransactions, filter) => {
    const { month, year } = filter;

    return allTransactions.filter(transaction => {
      if (transaction.year.includes(year) && transaction.month.includes(month)) {
        return transaction;
      }
    });
    // .sort((a, b) => a.date.localeCompare(b.date));
  },
);
