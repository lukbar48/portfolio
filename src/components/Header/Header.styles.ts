import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 800px;
  background-color: ${({ theme }) => theme.colors.bgcmain};
  padding: 8rem 1.5rem 3rem;
  text-align: center;


  h1 {
    color: ${({ theme }) => theme.colors.fontgrey1};
    margin-bottom: 1.2rem;
    visibility: visible;
    opacity: 1;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transition: opacity 0.8s cubic-bezier(0.5, 0, 0, 1) 0.8s, transform 0.8s cubic-bezier(0.5, 0, 0, 1) 0.8s;
  }

  p {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.l};
    color: ${({ theme }) => theme.colors.fontgrey2};
    letter-spacing: 0.5px;
    margin-bottom: 1.2rem;
    visibility: visible;
    opacity: 1;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
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
`;
