import * as React from 'react';
import TaskContainer from './components/task-container';
import TodoContainer from './components/todo-container';
import TodoHeader from './components/todo-header';
import ControlBar from './components/control-bar';

const Todo = () => {
  return (
    <TodoContainer>
      <TodoHeader />
      <ControlBar />
      <TaskContainer />
    </TodoContainer>
  );
};

export default Todo;
