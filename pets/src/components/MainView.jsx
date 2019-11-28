import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPets } from '../actions';
import AddPet from './forms/AddPet';
import AddPetModal from './AddPetModal';
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
  }, [pets]);

  const displayPets = async () => {
    if (pets.length > 0) {
      let newPetDisplay = await pets.map(pet => {
        {
          console.log(pet);
        }
        return (
          <PetCard
            key={pet.id}
            // petId={pet.id}
            // name={pet.name}
            // species={pet.species}
            // image={pet.imageUrl}
            pet={pet}
          />
        );
      });
      setPetDisplay(newPetDisplay);
    } else {
      setPetDisplay('No pets!');
    }
  };

  return (
    <>
      <AddPetModal />
      {petDisplay}
    </>
  );
};

export default MainView;
