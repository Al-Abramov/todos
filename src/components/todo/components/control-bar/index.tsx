import React, { useCallback } from 'react';
import { useAppDispatch } from '../../../../store';
import LayoutFlex from '../../../layout-flex';
import ControlBtn from '../control-btn';
import Controls from '../controls';
import ItemsCount from '../items-count';
import { clearCompleted } from '../../../../store/todo-slice';
import './style.scss';

const ControlBar = () => {
  const dispatch = useAppDispatch();

  const clear = useCallback(() => {
    dispatch(clearCompleted());
  }, [dispatch]);

  return (
    <LayoutFlex flex={'between'} pad={'pad'} class="ControlBar">
      <LayoutFlex flex="start align-center">
        <ItemsCount />
      </LayoutFlex>

      <Controls />

      <LayoutFlex flex="start align-center">
        <ControlBtn name={'Clear completed'} status={'active'} active={false} callback={clear} />
      </LayoutFlex>
    </LayoutFlex>
  );
};

export default ControlBar;
