import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroHome from '../HeroHome';
import TickCards from '../TickCards';

function Home() {
  return (
    <>
      <HeroHome />
      <Cards />
      <TickCards />
    </>
  );
}

export default Home;