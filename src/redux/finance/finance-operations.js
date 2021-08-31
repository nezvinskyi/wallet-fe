import apiTrans from '../../service/transactions-api';
import * as apiCats from '../../service/categories-api';
import * as actions from './finance-actions';

export const getTransactions = () => async dispatch => {
  dispatch(actions.getTransactionsRequest());

  try {
    const {
      data: { result },
    } = await apiTrans.getTransactions();
    dispatch(actions.getTransactionsSuccess(result));
    // console.log('data from redux operations TRANSACTIONS:>> ', result);
  } catch (error) {
    dispatch(actions.getTransactionsError(error.response?.data.message || error.message));
  }
};

export const getCategories = () => async dispatch => {
  dispatch(actions.getCategoriesRequest());

  try {
    const {
      data: { result },
    } = await apiCats.getCategories();
    dispatch(actions.getCategoriesSuccess(result));
    // console.log('data from redux operations CATS:>> ', result);
  } catch (error) {
    dispatch(actions.getCategoriesError(error.response?.data.message || error.message));
  }
};

export const getBalance = () => async dispatch => {
  dispatch(actions.getBalanceRequest());

  try {
    const { balance } = await apiTrans.getBalance();

    dispatch(actions.getBalanceSuccess(balance));
  } catch (error) {
    dispatch(actions.getBalanceError(error.response?.data.message || error.message));
  }
};

export const addTransaction = transaction => async dispatch => {
  dispatch(actions.addTransactionRequest());

  try {
    const { data } = await apiTrans.addTransaction(transaction);

    dispatch(actions.addTransactionSuccess(data.result));
  } catch (error) {
    console.log('error from finance operations/add Transaction>>', error.message);
    dispatch(actions.addTransactionError(error.response?.data.message || error.message));
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(actions.deleteTransactionRequest());

  try {
    await apiTrans.deleteTransactionById(id);
    dispatch(actions.deleteTransactionSuccess(id));
  } catch (error) {
    dispatch(actions.deleteTransactionError(error));
  }
};

export const addFilter = filter => async dispatch => {
  dispatch(actions.addFilter(filter));
};

export const setAddTrError = error => async dispatch => {
  dispatch(actions.addTransactionError(error));
};
