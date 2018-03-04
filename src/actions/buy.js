import {
  BUY_REQUEST,
  BUY_SUCCESS,
  BUY_FAILURE
} from '../constants/actionTypes';
import Api from '../api';
import RestActions from './restActions';

export const buy = () => (dispatch) => {
  dispatch(RestActions.request(BUY_REQUEST));
  return Api.buy()
    .then((response) => dispatch(RestActions.success(BUY_SUCCESS)))
    .catch((error) => dispatch(RestActions.failure(BUY_FAILURE, error.response.data)));
};
