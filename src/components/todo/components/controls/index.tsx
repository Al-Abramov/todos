import React, { useCallback, useState, useEffect } from 'react';
import { CONTROLS_BTNS } from '../../../../constants/control-btns';
import { useAppDispatch } from '../../../../store';
import { setFilter } from '../../../../store/todo-slice';
import ControlBtn from '../control-btn';
import { useSearchParams } from 'react-router-dom';
import './tyle.scss';

const Controls = () => {
  const [buttons, setButtons] = useState<number>(CONTROLS_BTNS[0].id);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const changeActiveBtn = (id: number) => {
    setButtons(id);
  };

  const filtered = useCallback(
    (status: string, id: number) => {
      changeActiveBtn(id);
      setSearchParams({ filter: status });
      //dispatch(setFilter(status));
    },
    [dispatch]
  );

  useEffect(() => {
    setSearchParams({ filter: 'all' });
  }, []);

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
