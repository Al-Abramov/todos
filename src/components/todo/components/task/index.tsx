import React, { useCallback } from 'react';
import Button from '../../../button';
import LayoutFlex from '../../../layout-flex';
import TaskTitleContainer from './components/title-container';
import './style.scss';
import { TaskProps } from './task.interface';

const Task: React.FC<TaskProps> = (props) => {
  const remove = useCallback(() => {
    props.remove(props.id);
  }, []);

  const toggleChek = useCallback(() => {
    props.toggle(props.id);
  }, []);

  return (
    <LayoutFlex flex="between" class="task">
      <LayoutFlex flex="between" class="task__container">
        <TaskTitleContainer
          id={props.id}
          title={props.title}
          completed={props.completed}
          toggleChek={toggleChek}
          ref={props.refCompleted}
        />
        <Button class="task__delete" onClick={remove} />
      </LayoutFlex>
    </LayoutFlex>
  );
};

export default React.memo(Task);
