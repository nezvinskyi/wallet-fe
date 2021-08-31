import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as actions from './finance-actions';
import * as userActions from '../user/user-actions';

const transactions = createReducer([], {
  [actions.getTransactionsSuccess]: (_, { payload }) => payload,
  [actions.addTransactionSuccess]: (state, { payload }) => [...state, payload],
  [actions.deleteTransactionSuccess]: (state, { payload }) =>
    state.filter(item => item._id !== payload),
  [userActions.logoutSuccess]: () => [],
});

const categories = createReducer([], {
  [actions.getCategoriesSuccess]: (_, { payload }) => payload,
  // [actions.add]: (state, { payload }) => [...state, payload],
});

const balance = createReducer(null, {
  [actions.getBalanceSuccess]: (_, { payload }) => payload,
  [userActions.logoutSuccess]: () => null,
});

const filter = createReducer(
  { year: '', month: '' },
  {
    [actions.addFilter]: (state, { payload }) => ({ ...state, ...payload }),
  },
);

export default combineReducers({
  transactions,
  categories,
  balance,
  filter,
});
