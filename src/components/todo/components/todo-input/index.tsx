import * as React from 'react';
import './style.scss';

const TodoInput = () => {
  return (
    <label className="todo__input-label" htmlFor="">
      <input className="todo__input" type="text" id="text" placeholder="What needs to be done" />
    </label>
  );
};

export default TodoInput;
