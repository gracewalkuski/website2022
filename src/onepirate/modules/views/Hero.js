import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import HeroLayout from './HeroLayout';
import bigImage from '../../../images/WillowNW2ExteriorSearch.jpg'


export default function Hero() {
  return (
    <HeroLayout
      sxBackground={{
        backgroundImage: `url(${bigImage})`,
        backgroundColor: '#718052', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={bigImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your Team
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="mailto:gracewalkuski@gmail.com"
        sx={{ minWidth: 200 }}
      >
        Contact me
      </Button>
    </HeroLayout>
  );
}
