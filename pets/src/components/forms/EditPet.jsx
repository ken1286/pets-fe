import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editPet } from '../../actions';
import { useHistory } from 'react-router-dom';

const EditPet = props => {
  const [value, setValue] = useState('');
  const pet = useSelector(state => state.mainview).find(
    pet => pet.id === props.petId
  );
  console.log(pet);
  const [name, setName] = useState(pet.name);
  const [species, setSpecies] = useState(pet.species);
  const [photo, setPhoto] = useState(null);
  const dispatch = useDispatch();

  // const handleChanges = e => {
  //   setValue(e.target.value);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    let newPet = new FormData();
    newPet.append('name', name);
    newPet.append('species', species);
    if (photo) {
      newPet.append('photo', photo, photo.name);
    }

    console.log(newPet);
    for (let pair of newPet.entries()) {
      console.log(pair[0], ' ', pair[1]);
    }
    dispatch(editPet(newPet, pet.id)).then(() => {
      props.toggle();
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

export default EditPet;
