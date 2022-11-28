import * as React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" target="_blank" href="https://mui.com/">
        Grace Walkuski
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

function Favicon() {
  return (
    <React.Fragment>
      <br />
      <Link color="inherit" target="_blank" href="https://icons8.com/icon/25645/mission">
      Mission
      </Link>{' icons by '}
      <Link color="inherit" target="_blank"  href="https://icons8.com">
      Icons8
      </Link>
    </React.Fragment>
  );
}

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid item>
          <Copyright />
          <Favicon />
                  </Grid>
      </Container>
    </Typography>
  );
}
