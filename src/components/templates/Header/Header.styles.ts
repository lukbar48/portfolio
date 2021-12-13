import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgcmain};
  margin: 0 auto;
  padding: 8rem 1.5rem 0rem;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  h1 {
    display: block;
    color: ${({ theme }) => theme.colors.fontgrey1};
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    margin-bottom: 1.2rem;
  }

  p {
    display: block;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.l};
    color: ${({ theme }) => theme.colors.fontgrey2};
    letter-spacing: 0.5px;
    margin-bottom: 1.2rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    text-align: left;
    flex-direction: row;
    gap: 0px;
    padding-bottom: 4rem;
    h1 {
      font-size: ${({ theme }) => theme.fontSizes.xxxl};
    }
    p {
      font-size: ${({ theme }) => theme.fontSizes.xl};
    }
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  @media ${({ theme }) => theme.breakpoints.md} {
    width: 60%;
    align-self: flex-start;
    padding-top: 70px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;

  @media ${({ theme }) => theme.breakpoints.md} {
    justify-content: flex-start;
    gap: 35px;
  }
`;

export const ButtonLink = styled(Link)`
  color: black;
  text-decoration: none;
  border-radius: 50%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  max-width: 500px;

  img {
    width: 100%;
    max-width: 500px;
    filter: brightness(90%) saturate(140%);
  }

  &:after {
    position: absolute;
    z-index: 5;
    background-image: linear-gradient(180deg, rgba(1, 1, 1, 0) 1%, #121212 50%);
    width: 100%;
    height: 50%;
    content: '';
    top: 50%;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 40%;
  }
`;
