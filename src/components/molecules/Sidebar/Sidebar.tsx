import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { List, Wrapper } from './Sidebar.styles';

const Sidebar = ({ setIsOpen }: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);
  return (
    <Wrapper>
      <List>
        <li onClick={() => setIsOpen(false)} data-aos="fade-in" data-aos-delay="100">
          <a href="#about-me">About me</a>
        </li>
        <li onClick={() => setIsOpen(false)} data-aos="fade-in" data-aos-delay="200">
          <a href="#projects">Projects</a>
        </li>
        <li onClick={() => setIsOpen(false)} data-aos="fade-in" data-aos-delay="300">
          <a href="#tech">Tech stack</a>
        </li>
        <li onClick={() => setIsOpen(false)} data-aos="fade-in" data-aos-delay="400">
          <a href="#contact">Contact</a>
        </li>
      </List>
    </Wrapper>
  );
};

export default Sidebar;
