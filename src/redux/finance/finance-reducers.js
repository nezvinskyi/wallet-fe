import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as actions from './finance-actions';

const transactions = createReducer([], {
  [actions.getTransactionsSuccess]: (_, { payload }) => payload,
  [actions.addTransactionSuccess]: (state, { payload }) => [...state, payload],
});

const categories = createReducer([], {
  [actions.getCategoriesSuccess]: (_, { payload }) => payload,
  // [actions.add]: (state, { payload }) => [...state, payload],
});

const balance = createReducer([], {
  [actions.getBalanceSuccess]: (_, { payload }) => payload,
});

export default combineReducers({
  transactions,
  categories,
  balance,
});
