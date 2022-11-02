import React from 'react';
import LayoutFlex from '../layout-flex';
import Todo from '../todo';

const Main = () => {
  return (
    <main>
      <LayoutFlex flex="center" pad={''}>
        <Todo />
      </LayoutFlex>
    </main>
  );
};

export default Main;
