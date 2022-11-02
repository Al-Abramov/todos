import React from 'react';
import './style.scss';

const Task = () => {
  return (
    <div className="task">
      <label className="task__check">
        <input className="task__check-input" type="checkbox" />
        <span className="task__check-box"></span>
        <span className="task__title">Какой то текст</span>
      </label>
      <button className="task__delete"></button>
    </div>
  );
};

export default Task;
