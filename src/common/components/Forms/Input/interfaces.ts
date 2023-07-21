import { ReactNode } from 'react';

/* Input */
export type Variant = 'primary' | 'error';
export interface IInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  variant?: Variant;
  errorState?: boolean;
}

/* Input error Message */
export interface IInputErrorMessage {
  message: string;
  className?: string;
}

/* Input Label */

export type IFormInputAd = {
  children: ReactNode;
  textRT?: string;
  textLT?: string;
};
