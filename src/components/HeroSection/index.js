import React from 'react';
import Video from '/Users/jacobdominguez/Documents/club-indomita/src/components/videos/video.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP} from './HeroElements'

const HeroSection = () => {
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Te estabamos esperando.</HeroH1>
          <HeroP>Indomita Secret Society</HeroP>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;
