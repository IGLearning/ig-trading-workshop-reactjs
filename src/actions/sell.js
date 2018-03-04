import {
  SELL_REQUEST,
  SELL_SUCCESS,
  SELL_FAILURE
} from '../constants/actionTypes';
import Api from '../api';
import RestActions from './restActions';

export const buy = () => (dispatch) => {
  dispatch(RestActions.request(SELL_REQUEST));
  return Api.buy()
    .then((response) => dispatch(RestActions.success(SELL_SUCCESS, response.data)))
    .catch((error) => dispatch(RestActions.failure(SELL_FAILURE, error.response.data)));
};
