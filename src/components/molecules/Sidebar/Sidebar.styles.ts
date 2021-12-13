import styled, { keyframes } from 'styled-components';

export const AppearAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  height: calc(100vh - 70px);
  background-color: ${({ theme }) => theme.colors.bgcmain};
  animation: 0.3s 1 forwards ${AppearAnimation};
`;
export const List = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: center;
  align-items: center;
  height: 100%;
  li {
    margin: 20px 0;
  }
  a {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.fontgrey2};
  }
  a:hover {
    color: ${({ theme }) => theme.colors.fontgrey1};
  }
`;
