import { ContactLinks, ContactWrapper, Wrapper } from './Footer.styles';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <Wrapper id='contact'>
      <ContactWrapper>
        <h3>Contact</h3>
        <ContactLinks>
          <a target="_blank" rel="noreferrer" href="https://github.com/lukbar48">
            <BsGithub />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/%C5%82ukasz-baranowski-23b537227/">
            <BsLinkedin />
          </a>
        </ContactLinks>
        <a target="_blank" rel="noreferrer" href="mailto:lukaszb48@gmail.com">
          lukaszb48@gmail.com
        </a>
      </ContactWrapper>
    </Wrapper>
  );
};

export default Footer;
