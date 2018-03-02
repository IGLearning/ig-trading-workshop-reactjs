import {
  GET_MARKETS_REQUEST,
  GET_MARKETS_SUCCESS,
  GET_MARKETS_FAILURE,
} from '../constants/actions';
import Api from '../api';

export const getMarkets = () => (dispatch) => {
  dispatch(request());
  return Api.getMarkets()
    .then((response) => dispatch(success(response.data)))
    .catch((error) => dispatch(failure(error)));
};

const request = () => ({
  type: GET_MARKETS_REQUEST
});

const success = (data) => ({
  type: GET_MARKETS_SUCCESS,
  payload: data
});

const failure = (error) =>({
  type: GET_MARKETS_FAILURE,
  payload: error
});

