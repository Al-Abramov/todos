import React, { useRef, useCallback } from 'react';
import { useAppDispatch } from '../../../../store';
import { addTodo } from '../../../../store/todo-slice';
import LayoutFlex from '../../../layout-flex';
import AddTodo from '../add-todo';
import './style.scss';

const TodoHeader = () => {
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);
  const dispatch = useAppDispatch();

  const add = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!inputRef.current?.value.trim()) return;
      dispatch(addTodo(inputRef.current.value));
      inputRef.current.value = '';
    },
    [dispatch]
  );

  return (
    <LayoutFlex flex={'start'} class={'todo__header'}>
      <AddTodo ref={inputRef} add={add} />
    </LayoutFlex>
  );
};
export default TodoHeader;
