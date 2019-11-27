import axios from 'axios';
const testUrl = 'http://localhost:5000/api/';
const token = localStorage.getItem('token');

export const getPets = () => dispatch => {
  return axios({
    url: `${testUrl}pets`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
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

export const addPet = newPet => dispatch => {
  return axios({
    url: `${testUrl}pets`,
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `${token}`
    },
    data: newPet
  })
    .then(res => {
      dispatch({ type: 'PETS_FETCHED', payload: res.data });
    })
    .catch(err => {
      dispatch({ type: 'PETS_FAILURE', payload: err });
    });
};
