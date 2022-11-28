import * as React from 'react';
import SmokingHero from './modules/views/SmokingHero';
import AppFooter from './modules/views/AppFooter';
import Hero from './modules/views/Hero';
import Intro from './modules/views/Intro';
import Values from './modules/views/Values';
import withRoot from './modules/withRoot';
import Hobbies from './modules/views/Hobbies';
import ResponsiveAppBar from './modules/views/ResponsiveAppBar';

function Index() {
  return (
    <React.Fragment>
      <ResponsiveAppBar />
      <Hero />
      <Intro />
      <Values />
      <Hobbies />
      <SmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
