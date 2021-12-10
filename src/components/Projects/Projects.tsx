import Project1 from 'components/Project1/Project1';
import Project2 from 'components/Project2/Project2';
import Project3 from 'components/Project3/Project3';
import { ProjectsWrapper, Wrapper } from './Projects.styles';

const Projects = () => {
  return (
    <Wrapper>
      <h1>Projects</h1>
      <p>
        Prototypes, Digital Products (Apps, Websites, SaaS solutions) and design systems which are visually pleasing, user-centric and easy to use.
      </p>
      <ProjectsWrapper>
        <Project2 />
        <Project1 />
        <Project3 />
      </ProjectsWrapper>
    </Wrapper>
  );
};

export default Projects;
