import React from 'react';
import { TitleProps } from './title.interface';
import './style.scss';

const TitleHead: React.FC<TitleProps> = ({ text }) => {
  return <h1 className="title-head">{text}</h1>;
};

export default TitleHead;
