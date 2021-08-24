import { combineReducers, createReducer } from '@reduxjs/toolkit';

import * as actions from '../user/user-actions';

const isAuthenticated = createReducer(false, {
  [actions.registerSuccess]: () => true,
  [actions.loginSuccess]: () => true,
  [actions.getCurrentUserSuccess]: () => true,
  [actions.registerError]: () => false,
  [actions.loginError]: () => false,
  [actions.getCurrentUserError]: () => false,
  [actions.logoutSuccess]: () => false,
});

const error = createReducer(null, {
  [actions.registerRequest]: () => null,
  [actions.loginRequest]: () => null,
  [actions.logoutRequest]: () => null,
  [actions.getCurrentUserRequest]: () => null,
  [actions.registerError]: (_, { payload }) => payload,
  [actions.loginError]: (_, { payload }) => payload,
  [actions.logoutError]: (_, { payload }) => payload,
  [actions.getCurrentUserError]: (_, { payload }) => payload,
});

export default combineReducers({
  isAuth: isAuthenticated,
  error,
});
