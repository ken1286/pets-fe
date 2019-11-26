import axios from 'axios';
const testUrl = 'http://localhost:5000/api/';
const token = localStorage.getItem('token');

export const getPets = () => dispatch => {
  return axios({
    url: `${testUrl}pets`,
    method: 'GET',
    headers: {
      Authorization: `${token}`
    }
  })
    .then(res => {
      dispatch({ type: 'PETS_FETCHED', payload: res.data });
    })
    .catch(err => {
      dispatch({ type: 'PETS_FAILURE', payload: err });
    });
};
