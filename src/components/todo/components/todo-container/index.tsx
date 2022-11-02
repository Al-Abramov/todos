import React from 'react';
import { TodoContainerProps } from './todo-container.inteface';
import './style.scss';

const TodoContainer: React.FC<TodoContainerProps> = (props) => {
  return <div className="todo">{props.children}</div>;
};

export default TodoContainer;
