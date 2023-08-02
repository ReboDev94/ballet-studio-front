import { FormHTMLAttributes, ReactNode } from 'react';
import { IButton } from '../Button/interfaces';

type IPosition = 'top' | 'bottom' | 'right' | 'left';
type IAlign = 'end' | 'start';

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

export interface IDropdownDivider{
  className?:string
}
