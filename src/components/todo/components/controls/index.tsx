import React from 'react';
import { CONTROLS_BTNS } from '../../../../constants/control-btns';
import ControlBtn from '../control-btn';

const Controls = () => {
  return (
    <div className="controls">
      {CONTROLS_BTNS.map((btn) => (
        <ControlBtn key={btn.id} name={btn.name} active={btn.active} />
      ))}
    </div>
  );
};

export default Controls;
