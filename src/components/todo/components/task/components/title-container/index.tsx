import { forwardRef } from 'react';
import CheckBox from '../../../../../check-box';
import LayoutFlex from '../../../../../layout-flex';
import { TaskTitleContainerProps } from './TaskTitleContainerProps.interface';
import './style.scss';
import { RefCheckBox } from '../../../../../check-box/checkBox.interface';
import TitleWrapper from '../title-wrapper';

const TaskTitleContainer = forwardRef<RefCheckBox, TaskTitleContainerProps>((props, ref) => {
  return (
    <LayoutFlex flex="start" class="task__title-container">
      <CheckBox ref={ref} toggle={props.toggleChek} checked={props.info.completed} />
      <TitleWrapper info={props.info} />
    </LayoutFlex>
  );
});

export default TaskTitleContainer;
