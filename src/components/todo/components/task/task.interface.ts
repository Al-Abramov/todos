export interface TaskProps {
  title: string;
  id: string;
  completed: boolean;
  ref: React.RefObject<HTMLInputElement>;
  remove: (id: string) => void;
  toggle: (id: string) => void;
}

export type RefCompleted = HTMLInputElement;
