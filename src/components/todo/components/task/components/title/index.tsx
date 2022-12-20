import React from 'react';
import { TaskTitleProps } from './taskTitle.interface';
import './style.scss';

const TaskTitle: React.FC<TaskTitleProps> = ({ completed, title, toggleEdit }) => {
  return (
    <span
      className={completed ? 'task__title task__title_completed' : 'task__title'}
      onClick={toggleEdit}
    >
      {title}
    </span>
  );
};

export default React.memo(TaskTitle);
