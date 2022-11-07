import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ControlBtn from '.';

describe('Control button', () => {
  const callbak = jest.fn();
  test('Control button render', () => {
    render(<ControlBtn id={123} name={'all'} status={'all'} active={true} callback={callbak} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  test('Control button functon', () => {
    render(<ControlBtn id={123} name={'all'} status={'all'} active={true} callback={callbak} />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(callbak).toHaveBeenCalled();
  });
});
