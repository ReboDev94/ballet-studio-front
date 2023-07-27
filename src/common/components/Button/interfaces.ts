import { ButtonHTMLAttributes } from 'react';

export type VariantBtn = 'primary';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantBtn;
  block?: boolean;
}
