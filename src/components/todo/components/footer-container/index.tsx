import { FooterContainerProps } from './footer-container.inteface';
import './style.scss';

const FooterContainer: React.FC<FooterContainerProps> = ({ children }) => {
  return <div className="todo-footer__container">{children}</div>;
};

export default FooterContainer;
