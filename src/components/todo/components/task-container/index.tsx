import React, { useCallback, useEffect, useRef } from 'react';
import { filters, filtersList } from '../../../../helpers';
import { FiltersInterface } from '../../../../helpers/helpers.interfaces';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { addTodo, removeTodo, toggleCompleted } from '../../../../store/todo-slice';
import { Todo, TodoStateList } from '../../../../store/todo-slice/todo-slice.iterface';
import LayoutFlex from '../../../layout-flex';
import Task from '../task';
import InnerContainer from '../task/components/inner-container';
import { useSearchParams } from 'react-router-dom';
import './style.scss';
import { FILTERS } from '../../../../constants/filters-list';

const TaskContainer = () => {
  // const completedRef = useRef(null);
  // const addRef: React.RefObject<HTMLInputElement> = useRef(null);
  const todos = useAppSelector((state) => state.todo.list);
  //const filter = useAppSelector((state) => state.todo.filter);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') || FILTERS.all;

  //const dispatch = useAppDispatch();

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
  const filterTodos = (todos: TodoStateList) => {
    const data = Object.values(todos);
    return filtersList[filter](data);
  };

  useEffect(() => {
    setSearchParams({ filter: FILTERS.all });
  }, []);

  return (
    <LayoutFlex flex={'start'} class={'TaskContainer column'}>
      {filterTodos(todos).map((todo) => (
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
              <InnerContainer list={todos} tasks={todo.children} filter={filter} />
            </>
          )}
        </LayoutFlex>
      ))}
    </LayoutFlex>
  );
};

export default TaskContainer;
