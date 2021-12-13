import { IButton } from 'interfaces';
import { BsGithub } from 'react-icons/bs';
import { MdLiveTv } from 'react-icons/md';
import { Wrapper } from './ButtonProjects.styles';

const ButtonProjects = ({ ...props }: IButton) => {
  return (
    <Wrapper {...props} href={props.href} rel="noreferrer" target="_blank" id="container">
      <div className="button" id="button">
        <div id="icon">{props.live ? <MdLiveTv /> : <BsGithub />}</div>
        <a rel="noreferrer" target="_blank" href={props.href}>
          {props.children}
        </a>
      </div>
    </Wrapper>
  );
};

export default ButtonProjects;
