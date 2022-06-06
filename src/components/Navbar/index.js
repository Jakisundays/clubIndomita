import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem} from './NavbarElements';

const Navbar = ({toggle}) => {
  return (
    <>
    <Nav>
        <NavbarContainer>
            <NavLogo to='/'>Club Indomita</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='reglas'>Reglas</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='promos'>Promociones</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='about'>Nosotros</NavLinks>
              </NavItem>
            </NavMenu>
        </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar
