import {
  GET_OPEN_POSITIONS_REQUEST,
  GET_OPEN_POSITIONS_SUCCESS,
  GET_OPEN_POSITIONS_FAILURE
} from '../constants/actionTypes';
import Api from '../api';
import RestActions from './restActions';

export const getOpenPositions = (clientId) => (dispatch) => {
  dispatch(RestActions.request(GET_OPEN_POSITIONS_REQUEST));
  return Api.getOpenPositions(clientId)
    .then((response) => dispatch(RestActions.success(GET_OPEN_POSITIONS_SUCCESS, response.data)))
    .catch((error) => dispatch(RestActions.failure(GET_OPEN_POSITIONS_FAILURE, error.response.data)));
};
