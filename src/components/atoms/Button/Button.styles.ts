import { IButton } from 'interfaces';
import styled from 'styled-components';

export const StyledButton = styled.div<IButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor, theme: { colors } }) => (backgroundColor ? backgroundColor : colors.blue1)};
  border: none;
  border: 2px solid black;
  width: ${({ width }) => (width ? width : '150px')};
  height: ${({ height }) => (height ? height : '50px')};
  border-radius: 25px;
  color: ${({ theme }) => theme.colors.bgcmain};
  cursor: pointer;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.l};
`;
