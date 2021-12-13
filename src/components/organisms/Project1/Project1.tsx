import { ImgDetails, ImgMain, Links, Text, Wrapper } from 'components/organisms/Project1/Project1.styles';
import desktop1 from 'assets/images/dietmasterdesk1.png';
import desktop2 from 'assets/images/dietmasterdesk2.png';
import desktop3 from 'assets/images/dietmasterdesk3.png';
import ButtonProjects from 'components/atoms/ButtonProjects/ButtonProjects';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Project1 = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);
  return (
    <Wrapper data-aos="fade-in">
      <Text>
        <h3 data-aos="fade-in" data-aos-delay="200">
          DIETMASTER
        </h3>
        <h4 data-aos="fade-in" data-aos-delay="300">
          Tool to manage patients for dietitian
        </h4>
      </Text>
      <ImgMain data-aos="fade-left">
        <img src={desktop1} alt="dietmaster" />
      </ImgMain>
      <ImgDetails>
        <img data-aos-delay="100" data-aos="fade-in" src={desktop2} alt="dietmaster" />
        <img data-aos-delay="200" data-aos="fade-in" src={desktop3} alt="dietmaster" />
      </ImgDetails>
      <Links>
        <ButtonProjects href="https://github.com/lukbar48/dietmaster">Details</ButtonProjects>
        <ButtonProjects live href="https://lukbar48.github.io/dietmaster/">
          Live
        </ButtonProjects>
      </Links>
    </Wrapper>
  );
};

export default Project1;
