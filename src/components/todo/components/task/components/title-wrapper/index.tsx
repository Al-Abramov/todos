import { FormEvent, useCallback, useRef, useState } from 'react';
import { useAppDispatch } from '../../../../../../store';
import { setTitle } from '../../../../../../store/todo-slice';
import TaskTitle from '../title';
import TitleEdit from '../title-edit';
import { TitleWrapperProps } from './titleWrapper.interface';

const TitleWrapper: React.FC<TitleWrapperProps> = ({ id, completed, title }) => {
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
        id,
        title: titleRef.current?.value,
        completed,
      })
    );
    setEdit(!edit);
  }, [edit, dispatch]);

  return edit ? (
    <TitleEdit title={title} ref={titleRef} applyTitle={applyTitle} toggleEdit={toggleEdit} />
  ) : (
    <TaskTitle completed={completed} title={title} toggleEdit={toggleEdit} />
  );
};

export default TitleWrapper;
