export interface TodoFormProps {
  ref: React.RefObject<HTMLInputElement>;
  add: (e: React.FormEvent<HTMLFormElement>) => void;
}

export type Ref = HTMLInputElement;
