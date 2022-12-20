import React, { useCallback, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { removeTodo, toggleCompleted } from '../../../../store/todo-slice';
import LayoutFlex from '../../../layout-flex';
import Task from '../task';

const TaskContainer = () => {
  const completedRef = useRef(null);
  const todos = useAppSelector((state) => state.todo.list);
  const dispatch = useAppDispatch();

  const remove = useCallback((id: string) => {
    dispatch(removeTodo(id));
  }, []);

  const toggle = useCallback((id: string) => {
    dispatch(toggleCompleted(id));
  }, []);

  return (
    <LayoutFlex flex={'start'} class={'column'}>
      {todos.map((todo) => (
        <Task
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          remove={remove}
          toggle={toggle}
          refCompleted={completedRef}
        />
      ))}
    </LayoutFlex>
  );
};

export default TaskContainer;
