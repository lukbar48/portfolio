import React from 'react';
import desktop1 from 'assets/images/zywieniedesk1.png';
import mobile1 from 'assets/images/zywieniemobile.png';
import desktop2 from 'assets/images/zywieniedesk2.png';
import desktop3 from 'assets/images/zywieniedesk3.png';
import { ButtonLink } from 'components/Header/Header.styles';
import Button from 'components/atoms/Button/Button';
import { ImgMain, ImgDetails, Links, Text, Wrapper } from 'components/Project1/Project1.styles';

const Project2 = () => {
  return (
    <Wrapper style={{backgroundColor: '#FF8200'}}>
      <Text>
        <h2>ŻYWIENIE NA TAK</h2>
        <h3>Website for dietitian</h3>
      </Text>
      <ImgMain>
        <img src={desktop1} alt="zywienienatak" />
        <img className='mobile' src={mobile1} alt="zywienienatak" />
      </ImgMain>
      <ImgDetails>
        <img src={desktop2} alt="zywienienatak" />
        <img src={desktop3} alt="zywienienatak" />
      </ImgDetails>
      <Links>
        <Button backgroundColor="transparent" width="120px" height="40px">
          <a href="https://github.com/lukbar48/zywienie-website/" rel="noreferrer" target="_blank">Details</a>
        </Button>
        <Button backgroundColor="transparent" width="120px" height="40px">
          <a href="https://lukbar48.github.io/zywienie-website/" rel="noreferrer" target="_blank">Live</a>
        </Button>
      </Links>
    </Wrapper>
  );
};

export default Project2;
