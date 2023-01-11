import { TodoState } from '../todo-slice/todo-slice.iterface';

export function toggleChildCompleted(arr: string[], parentCompleted: boolean, state: TodoState) {
  arr.forEach((id) => {
    state.list[id].completed = parentCompleted;
    state.list[id].children.length &&
      toggleChildCompleted(state.list[id].children, parentCompleted, state);
  });
}
