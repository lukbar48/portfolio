import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgcmain};
  padding: 4rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 50px;
    flex-direction: row;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 525px;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 50%;
    text-align: left;
    padding-top: 70px;
    align-self: flex-start;
  }

  h2 {
    color: ${({ theme }) => theme.colors.fontgrey1};
    margin-bottom: 1.5rem;
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }

  p {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.l};
    color: ${({ theme }) => theme.colors.fontgrey2};
    letter-spacing: 0.5px;
    margin-bottom: 2.5rem;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    h2 {
      font-size: ${({ theme }) => theme.fontSizes.xxl};
    }
    p {
      font-size: 1.3rem;
    }
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 525px;
  position: relative;

  img {
    position: relative;
    width: 100%;
  }

  div {
    width: 100%;
    height: 100%;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 50%;
  }

  &:before {
    position: absolute;
    z-index: 5;
    background-image: linear-gradient(0deg, rgba(1, 1, 1, 0) 1%, #121212 90%);
    width: 100%;
    height: 20%;
    content: '';
    top: 0;
  }

  &:after {
    position: absolute;
    z-index: 5;
    background-image: linear-gradient(180deg, rgba(1, 1, 1, 0) 1%, #121212 90%);
    width: 100%;
    height: 20%;
    content: '';
    top: 80%;
  }

  div:after {
    position: absolute;
    z-index: 5;
    background-image: linear-gradient(90deg, rgba(1, 1, 1, 0) 1%, #121212 90%);
    width: 10%;
    height: 100%;
    content: '';
    right: 0;
  }
  div:before {
    position: absolute;
    z-index: 5;
    background-image: linear-gradient(270deg, rgba(1, 1, 1, 0) 1%, #121212 90%);
    width: 10%;
    height: 100%;
    content: '';
    left: 0;
  }
`;
