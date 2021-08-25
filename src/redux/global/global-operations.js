import * as actions from './global-actions';

export const openModalAddTransaction = () => async dispatch => {
  dispatch(actions.openModalAddTransaction());
};

export const closeModalAddTransaction = () => async dispatch => {
  dispatch(actions.closeModalAddTransaction());
};
