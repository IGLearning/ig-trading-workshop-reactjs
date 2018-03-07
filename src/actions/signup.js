import {SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, GET_CLIENT_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from '../constants/actionTypes';
import {push} from 'react-router-redux';
import Api from '../api';
import RestActions from './restActions';

export const signup = (username) => (dispatch) => {
  dispatch(RestActions.request(SIGNUP_REQUEST));
  return Api.signUp(username)
    .then((response) => {
      dispatch(RestActions.success(SIGNUP_SUCCESS));
      dispatch(RestActions.success(GET_CLIENT_SUCCESS, response.data))
      dispatch(push('/'));
    })
    .catch(() => {
        dispatch(login(username))
    })
};

const login = (username) => (dispatch) => {
  dispatch(RestActions.request(LOGIN_REQUEST));
  return Api.login(username)
      .then((response) => {
          dispatch(RestActions.success(LOGIN_SUCCESS));
          dispatch(RestActions.success(GET_CLIENT_SUCCESS, response.data));
          dispatch(push('/'));
      })
      .catch((error) => {
          dispatch(RestActions.failure(LOGIN_FAILURE, error.response.data));
          dispatch(RestActions.failure(SIGNUP_FAILURE, error.response.data));
      })
};
