import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 100%;
  max-width: 520px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.yellow};
  padding: 2rem 1rem 2rem 2rem;
  margin-bottom: 4rem;
  overflow: hidden;
  transition: all 0.5s ease;
  break-inside: avoid;
`;

export const Text = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.bgcmain};
  font-size: 1rem;

  h3 {
    color: ${({ theme }) => theme.colors.bgcmain};
    font-size: ${({ theme }) => theme.fontSizes.l};
    padding-bottom: 20px;
    letter-spacing: 1px;
  }

  h4 {
    color: ${({ theme }) => theme.colors.bgcmain};
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    padding-bottom: 1rem;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    h4 {
      font-size: ${({ theme }) => theme.fontSizes.xxl};
    }
  }
`;

export const ImgMain = styled.div`
  width: 100%;
  position: relative;
  height: 400px;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -50%) !important;
    height: 100%;
  }

  .mobile {
    position: absolute;
    top: 50%;
    left: -25%;
    height: auto;
    width: 250px;
    transform: rotate(90deg) !important;
  }

  .mobileMain {
    position: absolute;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    padding: 20px 0;
  }
`;

export const ImgDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  padding: 20px 0 40px;

  img {
    width: 100%;
    max-width: 400px;
    border-radius: 7px;
  }
`;

export const Links = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    color: black;
    text-decoration: none;
    border-radius: 50%;
  }
`;
