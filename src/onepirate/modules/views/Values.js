import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import SchoolIcon from '@mui/icons-material/School';
import BuildIcon from '@mui/icons-material/Build';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function Values() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <ConnectWithoutContactIcon
                sx={{ fontSize: 80 }} />
              <Typography variant="h6" sx={{ my: 5 }}>
                Communication
              </Typography>
              <Typography variant="h5">
                {
                  'I make it a point to over-communicate with team mates on all work statuses and design shareouts.'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <SchoolIcon 
              sx={{ fontSize: 80 }}/>
              <Typography variant="h6" sx={{ my: 5 }}>
                Experience
              </Typography>
              <Typography variant="h5">
                {
                  'With 3+ years of experience working on several different agile engineering teams, I know the processes that work, and don\'t!'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <BuildIcon
                sx={{ fontSize: 80 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Knowledge
              </Typography>
              <Typography variant="h5">
                {'Full stack experience and the strong desire to learn make me a smart hiring choice.'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Values;
