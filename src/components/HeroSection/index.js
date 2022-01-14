import React from 'react'
import Video from '../../images/clean2.jpg'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from './HeroElements'

const Hero = () => {

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg src={Video} type='Image/jpg' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Cleaning done to your satisfaction</HeroH1>
        <HeroP>Contact Deliah's Cleaning Services for a quote</HeroP>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
