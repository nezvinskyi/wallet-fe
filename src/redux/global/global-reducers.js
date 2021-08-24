import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as userActions from '../user/user-actions';

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

export default combineReducers({
  isLoading,
  // isModalLogoutOpen
  // isModalAddTransactionOpen
});
