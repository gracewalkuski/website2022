import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';

const whiteLink = {
  color: 'common.white',
  ml: 3,
  mr: 3,
};

function HeaderBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'left' }} >
            <Link
              variant="h6"
              underline="none"
              href="mailto:gracewalkuski@gmail.com"
              sx={{ ...whiteLink, color: 'secondary.main' }}
            >
              {'Email me'}
            </Link>
            <Link
              target="_blank"
              color="inherit"
              variant="h6"
              underline="none"
              href="TODO"
              sx={whiteLink}
            >
              {'Resume'}
            </Link>
          </Box>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24 }}
          >
            {'grace walkuski'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              target="_blank"
              color="inherit"
              variant="h6"
              underline="none"
              href="https://github.com/gracewalkuski"
              sx={whiteLink}
            >
              {'Github'}
            </Link>
            <Link
              target="_blank"
              variant="h6"
              underline="none"
              href="https://www.linkedin.com/in/gracewalkuski/"
              sx={{ ...whiteLink, color: 'secondary.main' }}
            >
              {'LinkedIn'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default HeaderBar;
