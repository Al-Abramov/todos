import * as React from 'react';
import { LayoutFlexProps } from './layoutFlex.interface';
import './style.scss';

const LayoutFlex: React.FC<LayoutFlexProps> = (props) => {
  return (
    <div className={`LayoutFlex LayoutFlex_${props.flex} LayoutFlex_${props.pad}`}>
      {props.children}
    </div>
  );
};

export default LayoutFlex;
