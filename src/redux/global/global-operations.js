import * as actions from './global-actions';

export const openModalAddTransaction = () => async dispatch => {
  dispatch(actions.openModalAddTransaction());
};

export const closeModalAddTransaction = () => async dispatch => {
  dispatch(actions.closeModalAddTransaction());
};

export const openLogoutModal = () => async dispatch => {
  dispatch(actions.openLogoutModal());
};

export const closeLogoutModal = () => async dispatch => {
  dispatch(actions.closeLogoutModal());
};
