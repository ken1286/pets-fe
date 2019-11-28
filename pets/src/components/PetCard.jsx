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

// const dummyData = {
//   name: 'Baby Yoda',
//   species: 'Yoda',
//   color: 'Green',
//   imgLink:
//     'https://heavyeditorial.files.wordpress.com/2019/11/baby-yoda-toys.jpg?quality=65&strip=all&w=780'
// };

const PetCard = props => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDeletePet = ev => {
    ev.preventDefault();
    dispatch(deletePet(props.petId));
  };

  return (
    <Card raised={true}>
      <CardHeader title={props.name} />
      <CardMedia component='img' image={props.image} />
      <CardContent id='mid-content'>
        <Typography paragraph>{props.species}</Typography>
        <Typography paragraph>This is some sample text!</Typography>
      </CardContent>
      <CardActions disableSpacing>
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
      </CardActions>
      <Collapse in={expanded}>
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
        </CardContent>
        <EditPetModal petId={props.petId} />
        <button onClick={handleDeletePet}>X</button>
      </Collapse>
    </Card>
  );
};

export default PetCard;
