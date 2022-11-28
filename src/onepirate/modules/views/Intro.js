import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import headshot from '../../../images/headshot.jpg'
import { maxHeight } from '@mui/system';


function Intro() {

    return (
        <Container component="section" sx={{ mt: 10, display: 'flex' }}>
            <Grid container>
                <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            bgcolor: 'warning.main',
                            py: 8,
                            px: 3,
                        }}
                    >
                        <Box component="form" sx={{ maxWidth: 400 }}>
                            <Typography variant="h2" component="h2" gutterBottom>
                                Hi! I'm Grace
                            </Typography>
                            <Typography variant="h5">
                                I'm a senior software engineer with over 3 years of experince 
                                delivering scalable, flexible, data driven solutions to real world merchandizing partners.
                            </Typography>

                        </Box>
                    </Box>
                </Grid>
                <Grid
                    xs={12}
                    md={6}
                    sx={{ display:'block', position: 'relative', maxHeight:450}}
                >
                    <Box
                        component="img"
                        src={headshot}
                        alt="headshot"
                        sx={{
                            position: 'relative',
                            top: -50,
                            left: -100,
                            right: 0,
                            bottom: 0,
                            maxHeight: 500,
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Intro;
