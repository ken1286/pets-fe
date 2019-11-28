import React, { useState, useEffect } from 'react';
import { Modal } from '@material-ui/core';
import EditPet from './forms/EditPet';

const EditPetModal = props => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button type='button' onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        open={open}
        onClose={handleOpen}
      >
        <div>
          <EditPet toggle={handleOpen} petId={props.petId} />
        </div>
      </Modal>
    </div>
  );
};

export default EditPetModal;
