import React from 'react';
import { Todo } from '../../../../../../store/todo-slice/todo-slice.iterface';

export interface TaskTitleContainerProps {
  info: Todo;
  ref: React.RefObject<HTMLInputElement>;
  toggleChek: () => void;
}
