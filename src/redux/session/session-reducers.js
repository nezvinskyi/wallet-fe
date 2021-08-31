import { combineReducers, createReducer } from '@reduxjs/toolkit';

import * as userActions from '../user/user-actions';
import * as financeActions from '../finance/finance-actions';
import * as sessionActions from './session-actions';

const isAuthenticated = createReducer(false, {
  [userActions.registerSuccess]: () => true,
  [userActions.loginSuccess]: () => true,
  [userActions.getCurrentUserSuccess]: () => true,
  [userActions.registerError]: () => false,
  [userActions.loginError]: () => false,
  [userActions.getCurrentUserError]: () => false,
  [userActions.logoutSuccess]: () => false,
});

const error = createReducer(null, {
  [userActions.registerRequest]: () => null,
  [userActions.loginRequest]: () => null,
  [userActions.logoutRequest]: () => null,
  [userActions.getCurrentUserRequest]: () => null,

  [userActions.registerError]: (_, { payload }) => payload,
  [userActions.loginError]: (_, { payload }) => payload,
  [userActions.logoutError]: (_, { payload }) => payload,
  [userActions.getCurrentUserError]: (_, { payload }) => payload,

  [financeActions.addTransactionRequest]: () => null,
  [financeActions.deleteTransactionRequest]: () => null,
  [financeActions.getBalanceRequest]: () => null,
  [financeActions.getCategoriesRequest]: () => null,
  [financeActions.getTransactionsRequest]: () => null,

  [financeActions.addTransactionError]: (_, { payload }) => payload,
  [financeActions.deleteTransactionError]: (_, { payload }) => payload,
  [financeActions.getBalanceError]: (_, { payload }) => payload,
  [financeActions.getCategoriesError]: (_, { payload }) => payload,
  [financeActions.addTransactionError]: (_, { payload }) => payload,

  [sessionActions.setError]: (_, { payload }) => payload,
  [sessionActions.resetError]: () => null,
});

export default combineReducers({
  isAuth: isAuthenticated,
  error,
});
