import TechRedux from 'components/molecules/TechItems/TechRedux';
import TechCSS from 'components/molecules/TechItems/TechCSS';
import TechGIT from 'components/molecules/TechItems/TechGIT';
import TechHTML from 'components/molecules/TechItems/TechHTML';
import TechJS from 'components/molecules/TechItems/TechJS';
import TechReact from 'components/molecules/TechItems/TechReact';
import TechSass from 'components/molecules/TechItems/TechSass';
import TechTS from 'components/molecules/TechItems/TechTS';
import { TechWrapper, Wrapper } from './Tech.styles';
import TechSC from 'components/molecules/TechItems/TechSC';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Tech = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);
  return (
    <Wrapper id="tech">
      <h2 data-aos="fade-in" data-aos-delay="0" >Technologies</h2>
      <p data-aos="fade-in" data-aos-delay="200" >Tools that I had opportunity to work with</p>
      <TechWrapper data-aos="fade-in" data-aos-delay="500">
        <TechJS />
        <TechTS />
        <TechReact />
        <TechRedux />
        <TechHTML />
        <TechCSS />
        <TechSass />
        <TechSC />
        <TechGIT />
      </TechWrapper>
    </Wrapper>
  );
};

export default Tech;
