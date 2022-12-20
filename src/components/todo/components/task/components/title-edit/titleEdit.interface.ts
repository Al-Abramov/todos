import React, { FormEvent } from 'react';

export interface TitleEditProps {
  title: string;
  ref: React.RefObject<HTMLInputElement>;
  applyTitle: () => void;
  toggleEdit: () => void;
}
