// import React, { useState, useEffect, createRef } from 'react';
import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions,Chip } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles.js';
// import PoolIcon from '@material-ui/icons/Pool';
// import LocalParkingIcon from '@material-ui/icons/LocalParking';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const PlaceDetails = ({ place, selected, refProp, onAddToCart }) => {
  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const classes = useStyles();

  const handleAddToCart = () => {
    const cartItem = {
      name: place.name,
      rating: place.rating,
      price: place.price_level,
      address: place.address,
    };
    onAddToCart(cartItem);
  };

  

  return (
    <Card elevation={6}>
      <CardMedia
        // style={{ height: 350 }}
        style={{ height: 200, width: '100%' }}
        image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        // title={place.name}
        alt={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">{place.name}</Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
            <img src={award.images.small} alt={award.image.small} />
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place.address && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
            <LocationOnIcon />{place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography variant="body2" color="textSecondary" className={classes.spacing}>
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
          Website
        </Button>
        <Button size="small" color="primary" onClick={handleAddToCart}>
          Add to wishlist
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;







