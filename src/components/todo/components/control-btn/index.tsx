import * as React from 'react';
import { ControlBtnProps } from './control-btn.inteface';
import './style.scss';

const ControlBtn: React.FC<ControlBtnProps> = ({ name, active }) => {
  return <button className={`controls__btn ${active && 'controls__btn_active'}`}>{name}</button>;
};

export default ControlBtn;
