import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

import willowAlertingNW1 from '../../../images/WillowNW1ExteriorAlert.jpg'
import willowAlertingNW2 from '../../../images/WillowNW2ExteriorAlert.jpg'
import cypressAttentive from '../../../images/CypressAttentive.jpg'
import cypressLuring from '../../../images/CypressLuring.jpg'
import cypressAlert from '../../../images/CypressAlert.jpg'
import backyard from '../../../images/Backyard.jpg'
import glacier from '../../../images/Glacier.jpg'
import nw1RibbonPic from '../../../images/NW1RibbonPic.jpg'
import paulCauthenOldSaloon from '../../../images/PaulCauthenOldSaloon.jpg'



const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.3,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: willowAlertingNW2,
    width: '40%',
  },
  {
    url: cypressAlert,
    width: '30%',
  },
  {
    url: willowAlertingNW1,
    width: '30%',
  },
  {
    url: cypressAttentive,
    width: '23%',
  },
  {
    url: nw1RibbonPic,
    width: '37%',
  },

  {
    url: cypressLuring,
    width: '40%',
  },
  {
    url: glacier,
    width: '35%',
  },
  {
    url: paulCauthenOldSaloon,
    width: '30%',
  },
  {
    url: backyard,
    width: '35%',
  },

];

export default function Hobbies() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        Outside of work? 
      </Typography>
      <Typography variant="h5" marked="center" align="center" component="h2">
        You can find me training my dogs to do cool things, enjoying the outdoors, or jamming at a concert! 
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
