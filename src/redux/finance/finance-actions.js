import { createAction } from '@reduxjs/toolkit';

export const addTransactionRequest = createAction('transactions/addTransactionRequest');
export const addTransactionSuccess = createAction('transactions/addTransactionSuccess');
export const addTransactionError = createAction('transactions/addTransactionError');

export const deleteTransactionRequest = createAction('transactions/deleteTransactionRequest');
export const deleteTransactionSuccess = createAction('transactions/deleteTransactionSuccess');
export const deleteTransactionError = createAction('transactions/deleteTransactionError');

export const getTransactionsRequest = createAction('transactions/getTransactionsRequest');
export const getTransactionsSuccess = createAction('transactions/getTransactionsSuccess');
export const getTransactionsError = createAction('transactions/getTransactionsError');

export const getCategoriesRequest = createAction('categories/getCategoriesRequest');
export const getCategoriesSuccess = createAction('categories/getCategoriesSuccess');
export const getCategoriesError = createAction('categories/getCategoriesError');

export const getBalanceRequest = createAction('categories/getBalanceRequest');
export const getBalanceSuccess = createAction('categories/getBalanceSuccess');
export const getBalanceError = createAction('categories/getBalanceError');

export const addFilter = createAction('transactions/addFilter');
