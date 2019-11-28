import axios from 'axios';
const testUrl = 'http://localhost:5000/api/auth/';

export const login = credentials => dispatch => {
  return axios({
    url: `${testUrl}login`,
    method: 'POST',
    data: credentials
  })
    .then(res => {
      localStorage.setItem('token', res.data.token);
      console.log(res);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: 'LOGIN_FAILURE', payload: err });
    });
};

export const register = credentials => dispatch => {
  return axios({
    url: `${testUrl}register`,
    method: 'POST',
    data: credentials
  })
    .then(res => {
      console.log(res.data);
      localStorage.setItem('token', res.data.token);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    })
    .catch(err => {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
    });
};
