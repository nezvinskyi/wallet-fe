import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as userActions from '../user/user-actions';
import * as financeActions from '../finance/finance-actions';
import * as globalActions from './global-actions';

const isLoading = createReducer(false, {
  [userActions.registerRequest]: () => true,
  [userActions.loginRequest]: () => true,
  [userActions.logoutRequest]: () => true,
  [userActions.getCurrentUserRequest]: () => true,

  [financeActions.addTransactionRequest]: () => true,
  [financeActions.getTransactionsRequest]: () => true,
  [financeActions.getCategoriesRequest]: () => true,
  [financeActions.getBalanceRequest]: () => true,

  [userActions.registerSuccess]: () => false,
  [userActions.loginSuccess]: () => false,
  [userActions.logoutSuccess]: () => false,
  [userActions.getCurrentUserSuccess]: () => false,

  [financeActions.addTransactionSuccess]: () => false,
  [financeActions.getTransactionsSuccess]: () => false,
  [financeActions.getCategoriesSuccess]: () => false,
  [financeActions.getBalanceSuccess]: () => false,

  [userActions.registerError]: () => false,
  [userActions.loginError]: () => false,
  [userActions.logoutError]: () => false,
  [userActions.getCurrentUserError]: () => false,

  [financeActions.addTransactionError]: () => false,
  [financeActions.getTransactionsError]: () => false,
  [financeActions.getCategoriesError]: () => false,
  [financeActions.getBalanceError]: () => false,
});

const isModalAddTransactionOpen = createReducer(false, {
  [globalActions.openModalAddTransaction]: () => true,
  [globalActions.closeModalAddTransaction]: () => false,
});

const isLogoutModalOpen = createReducer(false, {
  [globalActions.openLogoutModal]: () => true,
  [globalActions.closeLogoutModal]: () => false,
});

export default combineReducers({
  isLoading,
  isModalAddTransactionOpen,
  isLogoutModalOpen,
});
