import React from 'react';
import { ImgDetails, ImgMain, Links, Text, Wrapper } from 'components/Project1/Project1.styles'
import desktop1 from 'assets/images/dietmasterdesk1.png';
import desktop2 from 'assets/images/dietmasterdesk2.png';
import desktop3 from 'assets/images/dietmasterdesk3.png';
import { ButtonLink } from 'components/Header/Header.styles';
import Button from 'components/atoms/Button/Button';

const Project1 = () => {
  return (
    <Wrapper>
      <Text>
        <h2>DIETMASTER</h2>
        <p>Tool to manage patients for dietitian</p>
      </Text>
      <ImgMain>
        <img src={desktop1} alt="dietmaster" />
      </ImgMain>
      <ImgDetails>
        <img src={desktop2} alt="dietmaster" />
        <img src={desktop3} alt="dietmaster" />
      </ImgDetails>
      <Links>
        <Button backgroundColor='transparent' width='120px' height='40px'>
          <ButtonLink to="https://lukbar48.github.io/dietmaster/">Details</ButtonLink>
        </Button>
        <Button backgroundColor='transparent' width='120px' height='40px'>
          <ButtonLink to="https://lukbar48.github.io/dietmaster/">Live</ButtonLink>
        </Button>
      </Links>
    </Wrapper>
  );
};

export default Project1;
