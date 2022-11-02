import * as React from 'react';
import Task from '../task';

const TaskContainer = () => {
  return (
    <div className="tasks-container">
      <Task />
      <Task />
      <Task />
    </div>
  );
};

export default TaskContainer;
