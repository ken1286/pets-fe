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

const dummyData = {
  name: 'Baby Yoda',
  species: 'Yoda',
  color: 'Green',
  imgLink:
    'https://heavyeditorial.files.wordpress.com/2019/11/baby-yoda-toys.jpg?quality=65&strip=all&w=780'
};

const PetCard = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card raised={true}>
      <CardHeader title={dummyData.name} />
      <CardMedia component='img' image={dummyData.imgLink} />
      <CardContent id='mid-content'>
        <Typography paragraph>Stuff:</Typography>
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
      </Collapse>
    </Card>
  );
};

export default PetCard;
