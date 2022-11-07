import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Controls from '.';
import store from '../../../../store';
import userEvent from '@testing-library/user-event';

describe('Controls component', () => {
  test('renders Controls component', () => {
    render(
      <Provider store={store}>
        <Controls />
      </Provider>
    );
    expect(screen.getAllByRole('button').length).toEqual(3);
  });
});
