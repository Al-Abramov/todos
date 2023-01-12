import React, { useCallback, useState } from 'react';
import { CONTROLS_BTNS } from '../../../../constants/control-btns';
import { filters } from '../../../../helpers';
import { useAppDispatch } from '../../../../store';
import { filteredTodo, setFilter } from '../../../../store/todo-slice';
import ControlBtn from '../control-btn';
import './tyle.scss';

const Controls = () => {
  const [buttons, setButtons] = useState<number>(CONTROLS_BTNS[0].id);

  const dispatch = useAppDispatch();

  const changeActiveBtn = (id: number) => {
    setButtons(id);
  };

  const filtered = useCallback(
    (status: string, id: number) => {
      // dispatch(filteredTodo(status));
      changeActiveBtn(id);
      dispatch(setFilter(status));
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
          active={btn.id === buttons}
          callback={filtered}
        />
      ))}
    </div>
  );
};

export default Controls;
