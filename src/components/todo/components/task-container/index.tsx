import React, { useCallback, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { removeTodo, toggleCompleted } from '../../../../store/todo-slice';
import LayoutFlex from '../../../layout-flex';
import Task from '../task';

const TaskContainer = () => {
  const completedRef = useRef(null);

  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todo.list);

  const remove = useCallback(
    (id: string) => {
      dispatch(removeTodo(id));
    },
    [dispatch]
  );

  const toggle = useCallback(
    (id: string) => {
      dispatch(toggleCompleted(id));
    },
    [dispatch]
  );

  return (
    <LayoutFlex flex={'start'} class={'column'}>
      {todos.map((todo) => (
        <Task
          key={todo.id}
          id={todo.id}
          ref={completedRef}
          title={todo.title}
          completed={todo.completed}
          remove={remove}
          toggle={toggle}
        />
      ))}
    </LayoutFlex>
  );
};

export default TaskContainer;
