import { TitleEditProps } from './titleEdit.interface';
import './style.scss';
import { FormEvent, forwardRef } from 'react';
import { Ref } from '../../../todo-form/todo-form.inteface';

const TitleEdit = forwardRef<Ref, TitleEditProps>(({ title, toggleEdit, applyTitle }, ref) => {
  const applyHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    applyTitle();
  };

  return (
    <form className="edit" action="" onSubmit={applyHandler}>
      <input className="edit__input task__title" ref={ref} type="text" defaultValue={title} />
      <div className="edit-btn-container">
        <span className="edit__btn edit__btn_close" onClick={toggleEdit}></span>
        <button className="edit__btn edit__btn_apply"></button>
      </div>
    </form>
  );
});

export default TitleEdit;
