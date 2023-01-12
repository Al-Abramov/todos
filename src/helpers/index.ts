import { Todo } from '../store/todo-slice/todo-slice.iterface';
import { FiltersInterface } from './helpers.interfaces';

export const filters: FiltersInterface = {
  initialData: [],
  data: [],

  setData(data: Todo[]) {
    this.data = data;
    this.initialData = data;
    return this;
  },
  all() {
    this.data = this.initialData;
    return this;
  },
  active() {
    this.data = this.data.filter((todo) => !todo.completed);
    return this;
  },
  completed() {
    this.data = this.data.filter((todo) => todo.completed);
    return this;
  },
};

interface IfiltersList {
  [key: string]: (data: Todo[]) => Todo[];
}

export const filtersList: IfiltersList = {
  all: (data: Todo[]) => {
    return data;
  },
  active: (data: Todo[]) => {
    return data.filter((todo) => !todo.completed);
  },
  completed: (data: Todo[]) => {
    return data.filter((todo) => todo.completed);
  },
};
