import React, { forwardRef } from 'react';
import { TodoFormProps, Ref } from './todo-form.inteface';
import './style.scss';

const TodoForm = forwardRef<Ref, TodoFormProps>((props, ref) => {
  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    props.add(e);
  };

  return (
    <form className="todo__form" action="" onSubmit={addTodo}>
      <button className="todo__add"></button>
      <label className="todo__input-label" htmlFor="">
        <input
          className="todo__input"
          ref={ref}
          type="text"
          id="text"
          placeholder="What needs to be done"
        />
      </label>
    </form>
  );
});

export default React.memo(TodoForm);
