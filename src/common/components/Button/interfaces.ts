import { ButtonHTMLAttributes } from 'react';

export type VariantBtn =
  | 'primary'
  | 'outline-primary'
  | 'base'
  | 'outline-base';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantBtn;
  block?: boolean;
}
