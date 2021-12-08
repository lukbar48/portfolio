import React from 'react';
import { Logo, Wrapper } from './Navbar.styles';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from 'assets/images/logo.png'

const Navbar = () => {
  return (
    <Wrapper>
      <Logo to="/"><img src={logo} alt="logo" /> Łukasz Baranowski</Logo>
      <div>
        <GiHamburgerMenu />
      </div>
    </Wrapper>
  );
};

export default Navbar;
