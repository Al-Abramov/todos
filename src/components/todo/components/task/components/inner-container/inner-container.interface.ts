import { Todo, TodoStateList } from '../../../../../../store/todo-slice/todo-slice.iterface';

export interface InnerContainerProps {
  tasks: string[];
  list: TodoStateList;
}
