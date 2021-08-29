import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as actions from './finance-actions';
import * as userActions from '../user/user-actions';

const transactions = createReducer([], {
  [actions.getTransactionsSuccess]: (_, { payload }) => payload,
  [actions.addTransactionSuccess]: (state, { payload }) => [...state, payload],
  [userActions.logoutSuccess]: state => [],
});

const categories = createReducer([], {
  [actions.getCategoriesSuccess]: (_, { payload }) => payload,
  // [actions.add]: (state, { payload }) => [...state, payload],
});

const balance = createReducer(null, {
  [actions.getBalanceSuccess]: (_, { payload }) => payload,
  [userActions.logoutSuccess]: () => null,
});

export default combineReducers({
  transactions,
  categories,
  balance,
});
