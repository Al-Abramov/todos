import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import TodoHeader from '.';
import store from '../../../../store';

describe('Todo header', () => {
  test('Todo header render', () => {
    render(
      <Provider store={store}>
        <TodoHeader />
      </Provider>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  test('add call', () => {
    render(
      <Provider store={store}>
        <TodoHeader />
      </Provider>
    );
    userEvent.type(screen.getByRole('textbox'), 'Test todo header');
    userEvent.click(screen.getByRole('button'));
    waitFor(() => {
      expect(screen.getByText(/Test todo header/i)).toBeInTheDocument();
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });
  });
});
