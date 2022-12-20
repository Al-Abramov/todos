export interface TaskProps {
  title: string;
  id: string;
  completed: boolean;
  refCompleted: React.RefObject<HTMLInputElement>;
  remove: (id: string) => void;
  toggle: (id: string) => void;
}
