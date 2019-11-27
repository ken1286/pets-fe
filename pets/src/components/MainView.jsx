import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPets } from '../actions';
import AddPet from './forms/AddPet';
import PetCard from './PetCard';

const MainView = () => {
  const pets = useSelector(state => state.mainview);
  const [petDisplay, setPetDisplay] = useState([]);
  const dispatch = useDispatch();
  console.log(pets);

  useEffect(() => {
    dispatch(getPets());
  }, []);

  useEffect(() => {
    displayPets();
  }, [pets.length]);

  const displayPets = async () => {
    if (pets.length > 0) {
      let newPetDisplay = await pets.map(pet => {
        return (
          <PetCard name={pet.name} species={pet.species} image={pet.imageUrl} />
        );
      });
      setPetDisplay(newPetDisplay);
    } else {
      setPetDisplay('No pets!');
    }
  };

  return (
    <>
      <AddPet />
      {petDisplay}
    </>
  );
};

export default MainView;
