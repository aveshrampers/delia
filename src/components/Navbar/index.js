import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{ color: '#000'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>Deliah's Cleaning Services</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Services</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to='gallery'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Gallery</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to='contact'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Contact Us</NavLinks>
            </NavItem>
           </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
