export interface ControlBtnProps {
  id?: number;
  name: string;
  status: string;
  active: boolean;
  callback: (name: string, id: number) => void;
}
