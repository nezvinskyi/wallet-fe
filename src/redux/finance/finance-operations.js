import apiTans from '../../service/transactions-api';
import * as apiCats from '../../service/categories-api';
import * as actions from './finance-actions';

export const getTransactions = () => async dispatch => {
  dispatch(actions.getTransactionsRequest());

  try {
    const {
      data: { result },
    } = await apiTans.getTransactions();
    dispatch(actions.getTransactionsSuccess(result));
    console.log('data from redux operations:>> ', result);
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
    console.log('data from redux operations CATS:>> ', result);
  } catch (error) {
    dispatch(actions.getCategoriesError(error.response?.data.message || error.message));
  }
};
