import React, { useCallback } from 'react';
import { useAppDispatch } from '../../../../store';
import LayoutFlex from '../../../layout-flex';
import ControlBtn from '../control-btn';
import Controls from '../controls';
import FooterContainer from '../footer-container';
import ItemsCount from '../items-count';
import { clearCompleted } from '../../../../store/todo-slice';
import './style.scss';

const TodoFooter = () => {
  const dispatch = useAppDispatch();

  const clear = useCallback(() => {
    dispatch(clearCompleted());
  }, [dispatch]);

  return (
    <LayoutFlex flex={'between'} pad={'pad'}>
      <FooterContainer>
        <ItemsCount />
      </FooterContainer>

      <Controls />

      <FooterContainer>
        <ControlBtn name={'Clear completed'} status={'active'} active={false} callback={clear} />
      </FooterContainer>
    </LayoutFlex>
  );
};

export default TodoFooter;
