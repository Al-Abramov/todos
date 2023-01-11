export interface TodoState {
  initialList: TodoStateList;
  list: TodoStateList;
  completed: number;
}

export interface Todo {
  title: string;
  id: string;
  completed: boolean;
  children: string[];
  parent?: string;
}

export interface FiltersProps {
  [key: string]: () => TodoStateList;
  all: () => TodoStateList;
  active: () => TodoStateList;
  completed: () => TodoStateList;
}

export interface TodoStateList {
  [key: string]: Todo;
}

export interface addNestedTodoProps {
  id: string;
  title: string;
}
