import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FiltersProps, TodoState } from './todo-slice.iterface';

export const initialState: TodoState = {
  initialList: [],
  list: [],
  completed: 0,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.list.push({
        id: new Date().toISOString(),
        title: action.payload,
        completed: false,
      });
      state.initialList = state.list;
      state.completed = state.list.filter((todo) => !todo.completed).length;
    },
    toggleCompleted(state, action: PayloadAction<string>) {
      const currentTodo = state.list.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
        state.completed = state.list.filter((todo) => !todo.completed).length;
        state.initialList = state.list;
      }
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.list = state.list.filter((todo) => todo.id != action.payload);
      state.completed = state.list.filter((todo) => !todo.completed).length;
      state.initialList = state.list;
    },
    filteredTodo(state, action: PayloadAction<string>) {
      const filters: FiltersProps = {
        all: () => state.list,
        active: () => state.list.filter((todo) => !todo.completed),
        completed: () => state.list.filter((todo) => todo.completed),
      };
      state.list = state.initialList;
      state.list = filters[action.payload]();
    },
    clearCompleted(state) {
      state.list = state.list.filter((todo) => !todo.completed);
      state.initialList = state.initialList.filter((todo) => !todo.completed);
    },
  },
});

export const { addTodo, toggleCompleted, removeTodo, filteredTodo, clearCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
