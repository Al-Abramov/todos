import React from 'react';

export interface TaskTitleContainerProps {
  id: string;
  completed: boolean;
  title: string;
  ref: React.RefObject<HTMLInputElement>;
  toggleChek: () => void;
}
