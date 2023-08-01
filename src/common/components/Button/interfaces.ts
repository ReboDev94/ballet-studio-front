import { ButtonHTMLAttributes } from 'react';

export type VariantBtn = 'primary' | 'outline-primary';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantBtn;
  block?: boolean;
}
