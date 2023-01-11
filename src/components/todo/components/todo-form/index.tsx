import React, { forwardRef } from 'react';
import { TodoFormProps, Ref } from './todo-form.inteface';
import './style.scss';

const TodoForm = forwardRef<Ref, TodoFormProps>((props, ref) => {
  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.add();
  };

  return (
    <form className={`todo__form ${props.class}`} action="" onSubmit={addTodo}>
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

TodoForm.defaultProps = {
  class: '',
};

export default React.memo(TodoForm);
