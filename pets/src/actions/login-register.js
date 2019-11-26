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
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    })
    .catch(err => {
      dispatch({ type: 'LOGIN_FAILURE', payload: err });
    });
};
