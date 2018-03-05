import {
  TRADE_REQUEST,
  TRADE_SUCCESS,
  TRADE_FAILURE
} from '../constants/actionTypes';
import Api from '../api';
import RestActions from './restActions';

export const sell = (marketId, clientId) => (dispatch) => {
  dispatch(RestActions.request(TRADE_REQUEST));
  return Api.sell(marketId, clientId)
    .then((response) => dispatch(RestActions.success(TRADE_SUCCESS)))
    .catch((error) => dispatch(RestActions.failure(TRADE_FAILURE, error.response.data)));
};
