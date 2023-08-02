import { FormHTMLAttributes, ReactNode } from 'react';

export interface IForm extends FormHTMLAttributes<HTMLFormElement> {}

type labelPosition = 'RT' | 'RB' | 'LT' | 'LB';

export interface ILabel {
  title: string;
  className?: string;
  children?: ReactNode;
  position?: labelPosition;
}
