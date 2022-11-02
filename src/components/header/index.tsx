import React from 'react';
import LayoutFlex from '../layout-flex';
import TitleHead from '../title-head';

const Header = () => {
  return (
    <header>
      <LayoutFlex flex="center" pad={''}>
        <TitleHead text="todos" />
      </LayoutFlex>
    </header>
  );
};

export default Header;
