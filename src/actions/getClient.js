import {
  GET_CLIENT_REQUEST,
  GET_CLIENT_SUCCESS,
  GET_CLIENT_FAILURE
} from '../constants/actions';
import Api from '../api';

export const getClient = (clientId) => (dispatch) => {
  dispatch(request());
  return Api.getClient(clientId)
    .then((response) => dispatch(success(response.data)))
    .catch((error) => dispatch(failure(error)))
};

const request = () => ({
  type: GET_CLIENT_REQUEST
});

const success = (data) => ({
  type: GET_CLIENT_SUCCESS,
  payload: data
});

const failure = (error)  => ({
  type: GET_CLIENT_FAILURE,
  payload: error
});
