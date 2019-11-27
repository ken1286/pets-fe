import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPet } from '../../actions';
import { useHistory } from 'react-router-dom';

const AddPet = props => {
  const [value, setValue] = useState('');
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [photo, setPhoto] = useState(null);

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  // const handleChanges = e => {
  //   setValue(e.target.value);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    let newPet = new FormData();
    newPet.append('name', name);
    newPet.append('species', species);
    newPet.append('photo', photo, photo.name);
    console.log(newPet);

    // console.log(newPet.entries());
    // console.log(newPet);
    for (let pair of newPet.entries()) {
      console.log(pair[0], ' ', pair[1]);
    }
    dispatch(addPet(newPet)).then(() => {
      history.push('/');
    });
    setName('');
    setSpecies('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pet name:
        <input
          type='text'
          value={name}
          onChange={e => {
            setName(e.target.value);
            console.log(name);
          }}
        />
      </label>
      <label>
        Species:
        <input
          type='text'
          value={species}
          onChange={e => {
            setSpecies(e.target.value);
            console.log(species);
          }}
        />
      </label>
      <label>
        Photo:
        <input
          type='file'
          onChange={e => {
            setPhoto(e.target.files[0]);
          }}
        />
      </label>
      <button onClick={handleSubmit}>Hello</button>
    </form>
  );
};

export default AddPet;
