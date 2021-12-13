import Project1 from 'components/organisms/Project1/Project1';
import Project2 from 'components/organisms/Project2/Project2';
import Project3 from 'components/organisms/Project3/Project3';
import { ProjectsWrapper, Wrapper } from './Projects.styles';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 800, delay: 0, once: true });
  }, []);
  return (
    <Wrapper id="projects">
      <h2 data-aos="fade-in">Projects</h2>
      <p data-aos="fade-in" data-aos-delay="200">My biggest projects that I have been working on recently</p>
      <ProjectsWrapper>
        <Project2 />
        <Project3 />
        <Project1 />
      </ProjectsWrapper>
    </Wrapper>
  );
};

export default Projects;
