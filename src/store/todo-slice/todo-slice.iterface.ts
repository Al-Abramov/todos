export interface TodoState {
  initialList: Todo[];
  list: Todo[];
  completed: number;
}

interface Todo {
  title: string;
  id: string;
  completed: boolean;
}

export interface FiltersProps {
  [key: string]: () => Todo[];
  all: () => Todo[];
  active: () => Todo[];
  completed: () => Todo[];
}
