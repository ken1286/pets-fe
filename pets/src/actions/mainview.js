import axios from 'axios';
const testUrl = 'http://localhost:5000/api/';

export const getPets = () => dispatch => {
  const token = localStorage.getItem('token');
  return axios({
    url: `${testUrl}pets`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`
    }
  })
    .then(res => {
      console.log(res.data);
      dispatch({ type: 'PETS_FETCHED', payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: 'PETS_FAILURE', payload: err });
    });
};

export const addPet = newPet => dispatch => {
  const token = localStorage.getItem('token');
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

export const editPet = (newPet, petId) => dispatch => {
  const token = localStorage.getItem('token');
  return axios({
    url: `${testUrl}pets/${petId}`,
    method: 'PUT',
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

export const deletePet = petId => dispatch => {
  const token = localStorage.getItem('token');
  return axios({
    url: `${testUrl}pets/${petId}`,
    method: 'DELETE',
    headers: {
      // 'Content-Type': 'multipart/form-data',
      Authorization: `${token}`
    },
    data: petId
  })
    .then(res => {
      console.log(res);
      dispatch({ type: 'PET_DELETED', payload: petId });
    })
    .catch(err => {
      console.log(err);
      // dispatch({ type: 'PETS_FAILURE', payload: err });
    });
};
