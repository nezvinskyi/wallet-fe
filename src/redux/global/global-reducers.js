import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as userActions from '../user/user-actions';
import * as globalActions from './global-actions';

const isLoading = createReducer(false, {
  [userActions.registerRequest]: () => true,
  [userActions.loginRequest]: () => true,
  [userActions.logoutRequest]: () => true,
  [userActions.getCurrentUserRequest]: () => true,

  [userActions.registerSuccess]: () => false,
  [userActions.loginSuccess]: () => false,
  [userActions.logoutSuccess]: () => false,
  [userActions.getCurrentUserSuccess]: () => false,

  [userActions.registerError]: () => false,
  [userActions.loginError]: () => false,
  [userActions.logoutError]: () => false,
  [userActions.getCurrentUserError]: () => false,
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
