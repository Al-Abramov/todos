import { useCallback, useRef, useState } from 'react';
import { useAppDispatch } from '../../../../../../store';
import { setTitle } from '../../../../../../store/todo-slice';
import TaskTitle from '../title';
import TitleEditForm from '../title-edit';
import { TitleWrapperProps } from './titleWrapper.interface';

const TitleWrapper: React.FC<TitleWrapperProps> = ({ info }) => {
  const [edit, setEdit] = useState(false);
  const titleRef: React.RefObject<HTMLInputElement> = useRef(null);
  const dispatch = useAppDispatch();

  const toggleEdit = useCallback(() => {
    setEdit(!edit);
  }, [edit]);

  const applyTitle = useCallback(() => {
    if (!titleRef.current?.value.trim()) return;
    dispatch(
      setTitle({
        id: info.id,
        title: titleRef.current?.value,
        completed: info.completed,
        children: info.children,
      })
    );
    setEdit(!edit);
  }, [edit, dispatch]);

  return edit ? (
    <TitleEditForm
      title={info.title}
      ref={titleRef}
      applyTitle={applyTitle}
      toggleEdit={toggleEdit}
    />
  ) : (
    <TaskTitle completed={info.completed} title={info.title} toggleEdit={toggleEdit} />
  );
};

export default TitleWrapper;
