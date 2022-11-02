import React, { forwardRef } from 'react';
import './style.scss';
import { RefCompleted, TaskProps } from './task.interface';

const Task = forwardRef<RefCompleted, TaskProps>((props, ref) => {
  const removeTask = () => {
    props.remove(props.id);
  };

  const toggleCompleted = () => {
    props.toggle(props.id);
  };

  return (
    <div className="task">
      <label className="task__check">
        <input
          className="task__check-input"
          ref={ref}
          type="checkbox"
          checked={props.completed}
          onChange={toggleCompleted}
        />
        <span className="task__check-box"></span>
        <span className="task__title">{props.title}</span>
      </label>
      <button className="task__delete" onClick={removeTask}></button>
    </div>
  );
});

export default React.memo(Task);
