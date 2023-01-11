export interface TodoFormProps {
  ref: React.RefObject<HTMLInputElement>;
  class: string;
  add: () => void;
}

export type Ref = HTMLInputElement;
