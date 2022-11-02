import React, { useCallback } from 'react';
import { CONTROLS_BTNS } from '../../../../constants/control-btns';
import { useAppDispatch } from '../../../../store';
import { filteredTodo } from '../../../../store/todo-slice';
import ControlBtn from '../control-btn';
import './tyle.scss';

const Controls = () => {
  const dispatch = useAppDispatch();

  const filtered = useCallback(
    (status: string, id: number) => {
      dispatch(filteredTodo(status));
      const btnActive = CONTROLS_BTNS.find((btn) => btn.id === id);
      if (btnActive) {
        btnActive.active = true;
      }
    },
    [dispatch]
  );

  return (
    <div className="controls">
      {CONTROLS_BTNS.map((btn) => (
        <ControlBtn
          key={btn.id}
          id={btn.id}
          name={btn.name}
          status={btn.name}
          active={btn.active}
          callback={filtered}
        />
      ))}
    </div>
  );
};

export default Controls;
