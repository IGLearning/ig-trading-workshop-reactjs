import {
  GET_MARKETS_REQUEST,
  GET_MARKETS_SUCCESS,
  GET_MARKETS_FAILURE,
} from '../constants/actionTypes';
import Api from '../api';
import RestActions from './restActions';

export const getMarkets = () => (dispatch) => {
  dispatch(RestActions.request(GET_MARKETS_REQUEST));
  return Api.getMarkets()
    .then((response) => dispatch(RestActions.success(GET_MARKETS_SUCCESS, response.data)))
    .catch((error) => dispatch(RestActions.failure(GET_MARKETS_FAILURE, error.response.data)));
};
