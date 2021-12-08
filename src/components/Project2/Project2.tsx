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
    <Wrapper style={{backgroundColor: '#1ab3ff'}}>
      <Text>
        <h2>ŻYWIENIE NA TAK</h2>
        <p>Website for dietitian</p>
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
          <ButtonLink to="https://lukbar48.github.io/dietmaster/">Details</ButtonLink>
        </Button>
        <Button backgroundColor="transparent" width="120px" height="40px">
          <ButtonLink to="https://lukbar48.github.io/dietmaster/">Live</ButtonLink>
        </Button>
      </Links>
    </Wrapper>
  );
};

export default Project2;
