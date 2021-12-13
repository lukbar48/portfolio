import mobile1 from 'assets/images/weathermobile.png';
import ButtonProjects from 'components/atoms/ButtonProjects/ButtonProjects';
import { ImgMain, Links, Text, Wrapper } from 'components/organisms/Project1/Project1.styles';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Project3 = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);
  return (
    <Wrapper data-aos="fade-in" data-aos-delay="500" style={{ backgroundColor: '#1ab3ff', order: 3 }}>
      <Text>
        <h3 data-aos="fade-in" data-aos-delay="600">WEATHER APP</h3>
        <h4 data-aos="fade-in" data-aos-delay="700">Check your weather easily</h4>
      </Text>
      <ImgMain data-aos="fade-right" data-aos-delay="600" style={{ height: '500px' }}>
        <img src={mobile1} className="mobileMain" alt="weather" />
      </ImgMain>
      <Links>
        <ButtonProjects color="#1ab3ff" href="https://github.com/lukbar48/weather-app/">
          Details
        </ButtonProjects>
        <ButtonProjects color="#1ab3ff" live href="https://lukbar48.github.io/weather-app/">
          Live
        </ButtonProjects>
      </Links>
    </Wrapper>
  );
};

export default Project3;
