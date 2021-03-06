import { IButton } from 'interfaces';
import { StyledButton } from './Button.styles';

const Button = ({ ...props }: IButton) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button
