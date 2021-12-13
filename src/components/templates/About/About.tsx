import { ImageWrapper, TextWrapper, Wrapper } from './About.styles';
import img from 'assets/images/me2.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);
  return (
    <Wrapper id="about-me">
      <TextWrapper>
        <h2 data-aos="fade-in" data-aos-delay="0">
          About me
        </h2>
        <p data-aos="fade-in" data-aos-delay="200">
          I am a beginner front-end developer, my current experience is based on creating my own projects. <br /> For the last few years I have been
          focusing on my passions - dietetics and professional sports. <br /> Currently, most of my time is devoted to development in front-end
          technologies. I am a hardworking person, distinguished by a willingness to develop and high motivation in pursuing my goals.
        </p>
      </TextWrapper>
      <ImageWrapper data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in-out">
        <div>
          <img src={img} alt="lukasz" />
        </div>
      </ImageWrapper>
    </Wrapper>
  );
};

export default About;
