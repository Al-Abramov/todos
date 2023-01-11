import React, { useCallback, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { addTodo, removeTodo, toggleCompleted } from '../../../../store/todo-slice';
import { Todo } from '../../../../store/todo-slice/todo-slice.iterface';
import LayoutFlex from '../../../layout-flex';
import Task from '../task';
import InnerContainer from '../task/components/inner-container';
import './style.scss';

const TaskContainer = () => {
  // const completedRef = useRef(null);
  // const addRef: React.RefObject<HTMLInputElement> = useRef(null);
  const todos = useAppSelector((state) => state.todo.list);
  // const dispatch = useAppDispatch();

  // const remove = useCallback((id: string) => {
  //   dispatch(removeTodo(id));
  // }, []);

  // const toggle = useCallback((id: string) => {
  //   dispatch(toggleCompleted(id));
  // }, []);

  // const addTask = useCallback(() => {
  //   /*if (!addRef.current?.value.trim()) return;
  //   dispatch(addTodo(addRef.current.value));
  //   addRef.current.value = '';*/
  //   console.log('add task');
  // }, []);

  return (
    <LayoutFlex flex={'start'} class={'TaskContainer column'}>
      {Object.values(todos).map((todo) => (
        <LayoutFlex flex={'start'} class={'column'} key={todo.id}>
          {!todo.parent && (
            <>
              <Task
                info={todo}
                // remove={remove}
                // toggle={toggle}
                // addTask={addTask}
                // refCompleted={completedRef}
                // addRef={addRef}
              />
              <InnerContainer list={todos} tasks={todo.children} />
            </>
          )}
        </LayoutFlex>
      ))}
    </LayoutFlex>
  );
};

export default TaskContainer;
