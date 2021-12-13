import { ButtonsWrapper, ImageWrapper, TextWrapper, Wrapper } from './Header.styles';
import img from 'assets/images/me.png';
import Button from 'components/atoms/Button/Button';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <Wrapper>
      <TextWrapper>
        <p data-aos="fade-up">Hi there, I'm Łukasz 👋</p>
        <h1 data-aos="fade-up" data-aos-delay="600">
          Front-end developer
        </h1>
        <p data-aos="fade-up" data-aos-delay="700">
        I am self taught developer, focused on creating clean and user-friendly applications with passion
        </p>
        <ButtonsWrapper>
          <Button data-aos="fade-in" data-aos-delay="800" width="200px">
            <a href="#projects">Check out my work</a>
          </Button>
        </ButtonsWrapper>
      </TextWrapper>
      <ImageWrapper data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in-out">
        <img src={img} alt="lukasz" />
      </ImageWrapper>
    </Wrapper>
  );
};

export default Header;
