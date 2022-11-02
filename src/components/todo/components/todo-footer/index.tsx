import * as React from 'react';
import LayoutFlex from '../../../layout-flex';
import ControlBtn from '../control-btn';
import Controls from '../controls';
import FooterContainer from '../footer-container';
import ItemsCount from '../items-count';
import './style.scss';

const TodoFooter = () => {
  return (
    <LayoutFlex flex={'between'} pad={'pad'}>
      <FooterContainer>
        <ItemsCount />
      </FooterContainer>

      <Controls />

      <FooterContainer>
        <ControlBtn name={'Clear completed'} active={false} />
      </FooterContainer>
    </LayoutFlex>
  );
};

export default TodoFooter;
