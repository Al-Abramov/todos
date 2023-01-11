import Task from '../..';
import { Todo } from '../../../../../../store/todo-slice/todo-slice.iterface';
import LayoutFlex from '../../../../../layout-flex';
import { InnerContainerProps } from './inner-container.interface';
import './style.scss';

const InnerContainer: React.FC<InnerContainerProps> = ({ tasks, list }) => {
  const getTasks = (tasks: string[]) => {
    return tasks.map((id) => list[id]);
  };

  return (
    <div className="children-container">
      {getTasks(tasks).map((task) => (
        <LayoutFlex key={task.id} flex={'start'} class={'task column'}>
          <Task info={list[task.id]} />
          <InnerContainer tasks={task.children} list={list} />
        </LayoutFlex>
      ))}
    </div>
  );
};

export default InnerContainer;
