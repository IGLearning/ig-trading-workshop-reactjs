import {SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE} from '../constants/actions';
import {push} from 'react-router-redux';
import Api from '../api';

export const signup = (username) => (dispatch) => {
  dispatch(request());
  return Api.signUp(username)
    .then((response) => {
      dispatch(success(response.data.clientId));
      dispatch(push('/'));
    })
    .catch((error) => dispatch(failure(error)))
};

const request = () => ({
  type: SIGNUP_REQUEST
});

const success = (clientId) => ({
  type: SIGNUP_SUCCESS,
  payload: clientId
});

const failure = (error) =>({
  type: SIGNUP_FAILURE,
  payload: error
});
