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
          <div key={pet.id} className='mainview-pet'>
            <PetCard
              // petId={pet.id}
              // name={pet.name}
              // species={pet.species}
              // image={pet.imageUrl}
              pet={pet}
            />
          </div>
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
      <div className='main-div'>{petDisplay}</div>
    </>
  );
};

export default MainView;
