import { useState } from 'react';
import { Content, Desktop, Logo, MenuToggleButton, Mobile, Wrapper } from './Navbar.styles';
import logo from 'assets/images/logo.png';
import Sidebar from 'components/molecules/Sidebar/Sidebar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Content>
        <Logo to="/">
          <img src={logo} alt="logo" /> Łukasz Baranowski
        </Logo>
        <Mobile>
          <MenuToggleButton isOpen={isOpen} onClick={() => setIsOpen((prevState) => !prevState)}>
            <span />
            <span />
          </MenuToggleButton>
          {isOpen ? <Sidebar setIsOpen={setIsOpen} /> : null}
        </Mobile>
        <Desktop>
          <li>
            <a href="#about-me">About me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#tech">Tech stack</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </Desktop>
      </Content>
    </Wrapper>
  );
};

export default Navbar;
