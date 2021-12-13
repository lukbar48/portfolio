import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.07);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  padding: 0 1.5rem;
  z-index: 1000;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1110px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.fontgrey1};
`;

export const Logo = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.fontgrey1};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.l};
  text-decoration: none;

  img {
    height: 40px;
    padding-right: 8px;
  }
`;

export const Mobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  pointer: cursor;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  width: 40px;
  @media ${({ theme }) => theme.breakpoints.md} {
    display: none;
  }
`;

export const Desktop = styled.ul`
  display: none;
  align-items: center;
  justify-content: center;
  min-width: 400px;
  list-style-type: none;
  li {
    padding: 1rem;
    font-size: 1.1rem;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.fontgrey2};
    font-weight: 400;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.fontgrey1};
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    display: flex;
  }
`;

export const MenuToggleButton = styled.button<any>`
  width: 30px;
  height: 30px;
  z-index: 9999;
  position: absolute;
  top: 20px;
  right: 20px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  overflow: hidden;

  span:first-child {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.bgcmain};
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(${({isOpen}) => isOpen ? 'calc(-100% - 2px)' : 0});
    transition: transform  ease-in-out 0.3s;

    &::before,
    &::after {
      position: absolute;
      content: '';
      width: 14px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.fontgrey1};
      left: 50%;
    }
    &::before {
      top: 9px;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      bottom: 9px;
      transform: translate(-50%, 50%) rotate(45deg);
    }
  }
  span:last-child {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.bgcmain};
    position: absolute;
    top: 0;
    left: calc(100% + 2px);
    transform: translateX(${({isOpen}) => isOpen ? 'calc(-100% - 2px)' : 0});
    transition: transform  ease-in-out 0.3s;

    &::before,
    &::after {
      position: absolute;
      content: '';
      width: 20px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.fontgrey1};
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
`;