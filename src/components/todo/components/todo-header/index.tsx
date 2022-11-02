import * as React from 'react';
import TodoInput from '../todo-input';
import './style.scss';

const TodoHeader = () => {
  return (
    <div className="todo__header">
      <TodoInput />
    </div>
  );
};
export default TodoHeader;
