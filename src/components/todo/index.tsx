import * as React from 'react';
import TaskContainer from './components/task-container';
import TodoContainer from './components/todo-container';
import TodoFooter from './components/todo-footer';
import TodoHeader from './components/todo-header';

const Todo = () => {
  return (
    <TodoContainer>
      <TodoHeader />
      <TaskContainer />
      <TodoFooter />
    </TodoContainer>
  );
};

export default Todo;
