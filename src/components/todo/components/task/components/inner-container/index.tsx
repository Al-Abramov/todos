import React from 'react';
import Task from '../..';
import { filtersList } from '../../../../../../helpers';
import LayoutFlex from '../../../../../layout-flex';
import { InnerContainerProps } from './inner-container.interface';
import './style.scss';

const InnerContainer: React.FC<InnerContainerProps> = ({ tasks, list, filter }) => {
  const filterTasks = (tasks: string[]) => {
    const data = tasks.map((id) => list[id]);
    return filtersList[filter](data);
  };

  return (
    <div className="children-container">
      {filterTasks(tasks).map((task) => (
        <LayoutFlex key={task.id} flex={'start'} class={'task column'}>
          <Task info={list[task.id]} />
          <InnerContainer tasks={task.children} list={list} filter={filter} />
        </LayoutFlex>
      ))}
    </div>
  );
};

export default InnerContainer;
