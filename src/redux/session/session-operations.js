import * as actions from './session-actions';

export const setError = () => async dispatch => {
  dispatch(actions.setError());
};

export const resetError = () => async dispatch => {
  dispatch(actions.resetError());
};
