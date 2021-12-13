import styled from 'styled-components';

export const Wrapper = styled.a`
  .button {
    display: inline-flex;
    height: 40px;
    width: 120px;
    border: 2px solid ${({ theme }) => theme.colors.bgcmain};
    color: ${({ theme }) => theme.colors.bgcmain};
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSizes.l};
    letter-spacing: 1px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 25px;
  }
  #container {
    width: 100%;
    margin: 0 auto;
    padding: 50px 0 150px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  a {
    color: ${({ theme }) => theme.colors.bgcmain};
    text-decoration: none;
    letter-spacing: 1px;
    font-weight: 700;
  }

  #button {
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  #button a {
    position: relative;
    left: 0;
    transition: all 0.35s ease-Out;
  }

  #icon {
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.bgcmain};
    left: -200px;
    position: absolute;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.35s ease-Out;
    bottom: 0;
    color: ${({ color, theme: { colors } }) => (color ? color : colors.yellow)};
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }

  #button:hover #icon {
    left: 0;
  }

  #button:hover a {
    left: 150px;
  }

  @media screen and (min-width: 1000px) {
    h1 {
      font-size: 2.2em;
    }
    #container {
      width: 50%;
    }
  }
`;
