import React, { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Collapse,
  Typography,
  CardActions,
  IconButton
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { deletePet } from '../actions';
import { useDispatch } from 'react-redux';
import EditPetModal from './EditPetModal';

const PetCard = props => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const pet = props.pet;

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const handleDeletePet = ev => {
    ev.preventDefault();
    dispatch(deletePet(pet.id));
  };

  return (
    <Card raised={true}>
      <CardHeader title={pet.name} />
      <CardMedia
        component='img'
        image={
          pet.imageUrl !== null ? pet.imageUrl : require('./placeholder.jpg')
        }
      />
      <CardContent className='mid-content'>
        <Typography paragraph>{pet.species}</Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton
          onClick={handleExpandClick}
          style={{
            transform: expanded ? 'rotate(180deg)' : '',
            transition: '.25s'
          }}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions> */}
      {/* <Collapse in={expanded}>
        <CardContent>
          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, repudiandae fugiat. In iste, quos praesentium dolorem
            repudiandae ab tenetur amet quisquam eius cumque quis magni
            adipisci? Iure, voluptate? Illum, ipsum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Placeat amet numquam autem in
            voluptates veniam voluptatum modi ad, totam iure sed fugiat deserunt
            odit harum temporibus mollitia eligendi dignissimos vero!
          </Typography>
        </CardContent> */}
      <div className='bottom-card'>
        <EditPetModal petId={pet.id} />
        <button onClick={handleDeletePet}>X</button>
      </div>
      {/* </Collapse> */}
    </Card>
  );
};

export default PetCard;
