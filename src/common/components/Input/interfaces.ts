import { InputHTMLAttributes } from 'react';

export type Variant = 'primary' | 'error';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  variant?: Variant;
  errorState?: boolean;
}
