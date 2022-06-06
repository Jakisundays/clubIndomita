import React, {useState} from 'react'
import DiscordSection from '../DiscordSection/ index';
import { DiscObj } from '../DiscordSection/Data';
import HeroSection from '../HeroSection';

import ReglasSection from '../ReglasSection';
import { homeObjOne } from '../ReglasSection/Data';
// import Sidebar from '../Sidebar'
// import NavBar from '/Users/jacobdominguez/Documents/club-indomita/src/components/Navbar/index';

const Home = () => {
    // const [isOpen, setIsOpen] = useState(false)

    // const toggle = () => (
    //     setIsOpen(!isOpen)
    // )
  return (
    <>
    {/* <NavBar toggle={toggle} />
    <Sidebar isOpen={isOpen} toggle={toggle} /> */}
    
    
    <HeroSection />
    <ReglasSection {...homeObjOne} />
    <DiscordSection {...DiscObj} />
    </>
  )
};

export default Home;


