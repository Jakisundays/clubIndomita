import React from 'react'
import HeroSection from '../HeroSection';
import ReglasSection from '../ReglasSection';
import DiscordSection from '../DiscordSection/ index';
import { homeObjOne } from '../ReglasSection/Data';
import { DiscObj } from '../DiscordSection/Data';

const Home = () => {
  return (
    <>
    <HeroSection />
    <ReglasSection {...homeObjOne} />
    <DiscordSection {...DiscObj} />
    </>
  )
};

export default Home;


