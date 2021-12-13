import desktop1 from 'assets/images/zywieniedesk1.png';
import mobile1 from 'assets/images/zywieniemobile.png';
import desktop2 from 'assets/images/zywieniedesk2.png';
import desktop3 from 'assets/images/zywieniedesk3.png';
import { ImgMain, ImgDetails, Links, Text, Wrapper } from 'components/organisms/Project1/Project1.styles';
import ButtonProjects from 'components/atoms/ButtonProjects/ButtonProjects';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Project2 = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);
  return (
    <Wrapper data-aos="fade-in" style={{ backgroundColor: '#FF8200' }}>
      <Text>
        <h3 data-aos="fade-in" data-aos-delay="200">ŻYWIENIE NA TAK</h3>
        <h4 data-aos="fade-in" data-aos-delay="300">Website for dietitian</h4>
      </Text>
      <ImgMain>
        <img data-aos="fade-left" src={desktop1} alt="zywienienatak" />
        <img data-aos="fade-right" className="mobile" src={mobile1} alt="zywienienatak" />
      </ImgMain>
      <ImgDetails>
        <img data-aos="fade-in" data-aos-delay="100" src={desktop2} alt="zywienienatak" />
        <img data-aos="fade-in" data-aos-delay="200" src={desktop3} alt="zywienienatak" />
      </ImgDetails>
      <Links>
        <ButtonProjects color="#FF8200" href="https://github.com/lukbar48/zywienie-website">
          Details
        </ButtonProjects>
        <ButtonProjects color="#FF8200" live href="https://lukbar48.github.io/zywienie-website/">
          Live
        </ButtonProjects>
      </Links>
    </Wrapper>
  );
};

export default Project2;
