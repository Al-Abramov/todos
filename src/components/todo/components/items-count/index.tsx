import React from 'react';
import { useAppSelector } from '../../../../store';
import './style.scss';

const ItemsCount = () => {
  const itemsLeft = useAppSelector((state) => state.todo.completed);

  return (
    <span className="items-count">
      <span>{itemsLeft}</span>
      <span> items left</span>
    </span>
  );
};

export default React.memo(ItemsCount);
