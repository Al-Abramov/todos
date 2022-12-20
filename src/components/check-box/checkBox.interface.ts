export interface CheckBoxProps {
  checked: boolean;
  ref: React.RefObject<HTMLInputElement>;
  toggle: () => void;
}

export type RefCheckBox = HTMLInputElement;
