import React, { useCallback, useState } from 'react';
import { CONTROLS_BTNS } from '../../../../constants/control-btns';
import { useAppDispatch } from '../../../../store';
import { filteredTodo } from '../../../../store/todo-slice';
import ControlBtn from '../control-btn';
import './tyle.scss';

const Controls = () => {
  const [buttons, setButtons] = useState(CONTROLS_BTNS);

  const dispatch = useAppDispatch();

  const changeActiveBtn = (id: number) => {
    const btns = buttons.map((btn) => {
      if (btn.active) {
        btn.active = false;
      }
      if (btn.id === id) {
        btn.active = true;
      }
      return btn;
    });
    setButtons(btns);
  };

  const filtered = useCallback(
    (status: string, id: number) => {
      dispatch(filteredTodo(status));
      changeActiveBtn(id);
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
