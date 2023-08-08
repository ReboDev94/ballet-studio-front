import { FormHTMLAttributes, ReactNode } from 'react';
import { IButton } from '../Button/interfaces';
import {
  ALING_END,
  ALING_START,
  POSITION_BOTTOM,
  POSITION_LEFT,
  POSITION_RIGHT,
  POSITION_TOP,
} from '../constants';

type IPosition =
  | typeof POSITION_TOP
  | typeof POSITION_BOTTOM
  | typeof POSITION_LEFT
  | typeof POSITION_RIGHT;
type IAlign = typeof ALING_END | typeof ALING_START;

export interface IDropdown extends FormHTMLAttributes<HTMLDivElement> {}

type buttonToogle = Pick<IButton, 'variant' | 'block'>;

export interface IDropdownToogle {
  children: ReactNode;
  button?: boolean;
  buttonProps?: buttonToogle;
}

export interface IDropdownMenu extends React.HTMLAttributes<HTMLUListElement> {
  position?: IPosition;
  align?: IAlign;
}
export interface IDropdownItem {
  children: ReactNode;
  className?: string;
}

export interface IDropdownDivider {
  className?: string;
}
