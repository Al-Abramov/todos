import React from 'react';
import { forwardRef } from 'react';
import { CheckBoxProps, RefCheckBox } from './checkBox.interface';
import './style.scss';

const CheckBox = forwardRef<RefCheckBox, CheckBoxProps>((props, ref) => {
  const handleChange = () => {
    props.toggle();
  };

  return (
    <label className="check">
      <input
        className="check-input"
        ref={ref}
        type="checkbox"
        checked={props.checked}
        onChange={handleChange}
      />
      <span className="check-box"></span>
    </label>
  );
});

export default React.memo(CheckBox);
