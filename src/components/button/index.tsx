import React from 'react';
import { ButtonProps } from './button.interface';

const Button: React.FC<ButtonProps> = (props) => {
  return <button className={props.class} onClick={props.onClick}></button>;
};

export default React.memo(Button);
