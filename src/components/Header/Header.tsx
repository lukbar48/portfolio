import {  ButtonLink, ButtonsWrapper, ImageWrapper, Wrapper } from './Header.styles';
import img from '../../assets/images/me.png'
import Button from 'components/atoms/Button/Button';

const Header = () => {
  return (
    <Wrapper>
      <p>Hi there, I'm Łukasz 👋</p>
      <h1>Front-end developer</h1>
      <p>I help people and brands reach their goals by designing and building user-centric digital products and interactive experiences</p>
      <ButtonsWrapper>
        <Button> 
          <ButtonLink to="/projects">My projects</ButtonLink>
        </Button>
        <Button>
          <ButtonLink to="/about">About me</ButtonLink>
        </Button>
      </ButtonsWrapper>
      <ImageWrapper>
        <img src={img} alt="me" />
      </ImageWrapper>
    </Wrapper>
  );
};

export default Header;
