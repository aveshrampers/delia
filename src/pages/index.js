import React, {useState} from 'react'
import Hero from '../components/HeroSection'
import Info from '../components/InfoSection'
import { homeObjOne, homeObjTwo} from '../components/InfoSection/Data';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Contact from '../components/ContactUs';
import Gallery from '../components/Gallery';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Hero />
      <Info {...homeObjOne}/>
      <Info {...homeObjTwo} />
      <Gallery/>
      <Contact />
    </>
  )
}

export default Home
