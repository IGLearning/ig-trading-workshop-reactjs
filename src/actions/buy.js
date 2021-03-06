import {
  TRADE_REQUEST,
  TRADE_SUCCESS,
  TRADE_FAILURE
} from '../constants/actionTypes';
import Api from '../api';
import RestActions from './restActions';

export const buy = (marketId, clientId) => (dispatch) => {
  dispatch(RestActions.request(TRADE_REQUEST));
  return Api.buy(marketId, clientId)
    .then((response) => dispatch(RestActions.success(TRADE_SUCCESS, response.data)))
    .catch((error) => dispatch(RestActions.failure(TRADE_FAILURE, error.response.data)));
};
