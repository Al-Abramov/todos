import React, { useCallback, useRef } from 'react';
import { useAppDispatch } from '../../../../store';
import { addNestedTodo, removeTodo, toggleCompleted } from '../../../../store/todo-slice';
import { addNestedTodoProps } from '../../../../store/todo-slice/todo-slice.iterface';
import Button from '../../../button';
import LayoutFlex from '../../../layout-flex';
import TodoForm from '../todo-form';
import TaskTitleContainer from './components/title-container';
import './style.scss';
import { TaskProps } from './task.interface';

const Task: React.FC<TaskProps> = ({ info }) => {
  const completedRef = useRef(null);
  const addRef: React.RefObject<HTMLInputElement> = useRef(null);
  const dispatch = useAppDispatch();

  const removeTask = useCallback(() => {
    dispatch(removeTodo(info.id));
  }, [dispatch, info.id]);

  const toggleChek = useCallback(() => {
    dispatch(toggleCompleted(info.id));
  }, [dispatch, info.id]);

  const addTask = useCallback(() => {
    const props: addNestedTodoProps = {
      id: info.id,
      title: addRef.current?.value as string,
    };

    if (!addRef.current?.value.trim()) return;
    dispatch(addNestedTodo(props));
    addRef.current.value = '';
  }, [dispatch, info.id]);

  return (
    <LayoutFlex flex="between" class="task column">
      <LayoutFlex flex="between" class="task__container">
        <TaskTitleContainer info={info} toggleChek={toggleChek} ref={completedRef} />
        <Button class="task__delete" onClick={removeTask} />
      </LayoutFlex>
      <TodoForm class="todo__form_task" add={addTask} ref={addRef} />
    </LayoutFlex>
  );
};

export default React.memo(Task);
