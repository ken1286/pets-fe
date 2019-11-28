import React, { useState, useEffect } from 'react';
import { Modal } from '@material-ui/core';
import AddPet from './forms/AddPet';

const AddPetModal = props => {
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
          <AddPet toggle={handleOpen} />
        </div>
      </Modal>
    </div>
  );
};

export default AddPetModal;
