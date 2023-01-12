import { Todo } from '../store/todo-slice/todo-slice.iterface';

export interface FiltersInterface {
  initialData: Todo[];
  data: Todo[];
  setData: (data: Todo[]) => FiltersInterface;
  all: () => FiltersInterface;
  active: () => FiltersInterface;
  completed: () => FiltersInterface;
}
