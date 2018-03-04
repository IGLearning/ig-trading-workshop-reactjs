import {
  GET_CLIENT_REQUEST,
  GET_CLIENT_SUCCESS,
  GET_CLIENT_FAILURE
} from '../constants/actionTypes';
import Api from '../api';
import RestActions from './restActions';

export const getClient = (clientId) => (dispatch) => {
  dispatch(RestActions.request(GET_CLIENT_REQUEST));
  return Api.getClient(clientId)
    .then((response) => dispatch(RestActions.success(GET_CLIENT_SUCCESS, response.data)))
    .catch((error) => dispatch(RestActions.failure(GET_CLIENT_FAILURE, error.response.data)));
};
