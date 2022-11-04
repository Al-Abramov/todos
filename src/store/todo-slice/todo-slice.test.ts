import todoReducer, {
  addTodo,
  toggleCompleted,
  removeTodo,
  filteredTodo,
  clearCompleted,
  initialState,
} from '.';
import { Todo, TodoState } from './todo-slice.iterface';

describe('todoSlice', () => {
  const mockState: TodoState = {
    initialList: [],
    list: [],
    completed: 0,
  };

  test('should add todo', () => {
    const action = { type: addTodo.type, payload: 'Test' };

    const result = todoReducer(initialState, action);

    expect(result.list[0].title).toBe('Test');
    expect(result.list[0].completed).toBe(false);
  });
  test('should toggle todo completed', () => {
    const todo: Todo = { id: '123', title: 'Test', completed: false };
    mockState.list.push(todo);

    const action = { type: toggleCompleted.type, payload: '123' };
    const result = todoReducer(mockState, action);

    expect(result.list[0].completed).toBe(true);
  });
  test('should remove todo', () => {
    const action = { type: removeTodo.type, payload: '123' };
    const result = todoReducer(mockState, action).list;
    expect(result).toEqual([]);
  });

  describe('todoSlice filterd actions', () => {
    const mockState: TodoState = {
      initialList: [],
      list: [],
      completed: 0,
    };

    const todo1 = { id: '123', title: 'Test all', completed: false };
    const todo2 = { id: '124', title: 'Test active', completed: false };
    const todo3 = { id: '125', title: 'Test completed', completed: true };
    test('should filtered completed todos', () => {
      mockState.list.push(todo1, todo2, todo3);
      mockState.initialList = mockState.list;

      const action = { type: filteredTodo.type, payload: 'completed' };
      const result = todoReducer(mockState, action).list;

      expect(result).toEqual([todo3]);
    });
    test('should filtered active todos', () => {
      const action = { type: filteredTodo.type, payload: 'active' };
      const result = todoReducer(mockState, action).list;

      expect(result).toEqual([todo1, todo2]);
    });
    test('should filtered all todos', () => {
      const action = { type: filteredTodo.type, payload: 'all' };
      const result = todoReducer(mockState, action).list;

      expect(result).toEqual([todo1, todo2, todo3]);
    });
    test('should clear completed', () => {
      const action = { type: clearCompleted.type, payload: '' };
      const result = todoReducer(mockState, action).list;
      expect(result).toEqual([todo1, todo2]);
    });
  });
});
