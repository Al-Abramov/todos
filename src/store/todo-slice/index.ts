import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toggleChildCompleted } from '../helpers';
import { addNestedTodoProps, FiltersProps, Todo, TodoState } from './todo-slice.iterface';

export const initialState: TodoState = {
  initialList: {
    '2022-12-29T09:17:18.442Z': {
      id: '2022-12-29T09:17:18.442Z',
      completed: false,
      title: 'Test 1',
      children: ['2022-12-29T09:17:18.443Z', '2022-12-29T09:17:18.501Z'],
    },
    '2022-12-29T09:17:18.500Z': {
      id: '2022-12-29T09:17:18.500Z',
      completed: false,
      title: 'Test 2',
      children: [],
    },
    '2022-12-29T09:17:18.443Z': {
      id: '2022-12-29T09:17:18.443Z',
      completed: false,
      title: 'Inner 1',
      children: [],
      parent: '2022-12-29T09:17:18.442Z',
    },
    '2022-12-29T09:17:18.501Z': {
      id: '2022-12-29T09:17:18.501Z',
      completed: false,
      title: 'Inner 2',
      children: [],
      parent: '2022-12-29T09:17:18.442Z',
    },
  },
  list: {
    '2022-12-29T09:17:18.442Z': {
      id: '2022-12-29T09:17:18.442Z',
      completed: false,
      title: 'Test 1',
      children: ['2022-12-29T09:17:18.443Z'],
    },
    '2022-12-29T09:17:18.500Z': {
      id: '2022-12-29T09:17:18.500Z',
      completed: false,
      title: 'Test 2',
      children: [],
    },
    '2022-12-29T09:17:18.443Z': {
      id: '2022-12-29T09:17:18.443Z',
      completed: false,
      title: 'Inner 1',
      children: ['2022-12-29T09:17:18.501Z'],
      parent: '2022-12-29T09:17:18.442Z',
    },
    '2022-12-29T09:17:18.501Z': {
      id: '2022-12-29T09:17:18.501Z',
      completed: false,
      title: 'Inner inner 2',
      children: [],
      parent: '2022-12-29T09:17:18.443Z',
    },
  },
  completed: 4,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      const id = new Date().toISOString() as string;
      state.list[id] = {
        id,
        title: action.payload,
        completed: false,
        children: [],
      };
      state.initialList = { ...state.list };
      state.completed = Object.values(state.list).filter((todo) => !todo.completed).length;
    },
    addNestedTodo(state, action: PayloadAction<addNestedTodoProps>) {
      const id = new Date().toISOString() as string;
      state.list[id] = {
        id,
        title: action.payload.title,
        completed: false,
        parent: action.payload.id,
        children: [],
      };
      state.list[action.payload.id].children.push(id);
    },
    toggleCompleted(state, action: PayloadAction<string>) {
      const currentTodo = state.list[action.payload];
      currentTodo.completed = !currentTodo.completed;

      currentTodo.children.length &&
        toggleChildCompleted(currentTodo.children, currentTodo.completed, state);

      state.completed = Object.values(state.list).filter((todo) => !todo.completed).length;
      state.initialList = { ...state.list };
    },
    setTitle(state, action: PayloadAction<Todo>) {
      const currentTodo = state.list[action.payload.id];
      currentTodo.title = action.payload.title;
      state.initialList = { ...state.list };
    },
    removeTodo(state, action: PayloadAction<string>) {
      delete state.list[action.payload];
      state.completed = Object.values(state.list).filter((todo) => !todo.completed).length;
      state.initialList = { ...state.list };
    },
    filteredTodo(state, action: PayloadAction<string>) {
      /*const filters: FiltersProps = {
        all: () => state.list,
        active: () => {
          for (const todo in state.list) {
            if (state.list[todo].completed) {
              if (state.list[todo].parent) {
                const parentId = state.list[todo].parent as string;
                const childID = state.list[todo].id as string;
                state.list[parentId].children = state.list[parentId].children.filter(
                  (id) => id !== childID
                );
              }
              delete state.list[todo];
            }
          }
          return state.list;
        },
        completed: () => {
          for (const todo in state.list) {
            if (!state.list[todo].completed) {
              delete state.list[todo];
            }
          }
          return state.list;
        },
      };
      state.list = { ...state.initialList };
      state.list = filters[action.payload]();*/
    },
    clearCompleted(state) {
      for (const todo in state.list) {
        if (state.list[todo].completed) {
          const parentId = state.list[todo].parent;
          state.list[todo].children.forEach((id) => {
            delete state.list[id];
          });

          if (parentId) {
            state.list[parentId].children = state.list[parentId].children.filter(
              (id) => id !== state.list[todo].id
            );
          }

          delete state.list[todo];
        }
      }
    },
  },
});

export const {
  addTodo,
  addNestedTodo,
  toggleCompleted,
  removeTodo,
  filteredTodo,
  clearCompleted,
  setTitle,
} = todoSlice.actions;

export default todoSlice.reducer;
