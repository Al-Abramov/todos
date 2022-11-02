import React from 'react';
import { ControlBtnProps } from './control-btn.inteface';
import './style.scss';

const ControlBtn: React.FC<ControlBtnProps> = ({ id, name, status, active, callback }) => {
  const filtered = () => {
    callback(status.toLowerCase(), id as number);
  };

  return (
    <button className={`controls__btn ${active && 'controls__btn_active'}`} onClick={filtered}>
      {name}
    </button>
  );
};

export default React.memo(ControlBtn);
