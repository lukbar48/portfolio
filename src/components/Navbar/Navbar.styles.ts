import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.07);
  color: ${({ theme }) => theme.colors.fontgrey1};
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  padding: 0 24px;
  z-index: 1000;
`;

export const Logo = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.fontgrey1};
  font-weight: 700;
  text-decoration: none;

  img {
    height: 40px;
    padding-right: 8px;
  }
`;
