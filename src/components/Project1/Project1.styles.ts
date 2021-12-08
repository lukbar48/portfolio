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
  overflow: hidden;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.01);
  }
`;

export const Text = styled.div`
  width: 100%;

  h2 {
    color: ${({ theme }) => theme.colors.bgcmain};
    font-size: 1rem;
    padding-bottom: 20px;
  }

  p {
    color: ${({ theme }) => theme.colors.bgcmain};
    font-weight: 500;
    font-size: 2rem;
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
    transform: translate(-40%, -50%);
    height: 100%;
  }

  .mobile {
    position: absolute;
    top: 50%;
    left: -25%;
    height: auto;
    width: 250px;
    transform: rotate(90deg);
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
    border: 1px solid black;
  }
`;

export const Links = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
