import { ReactNode } from 'react';

export interface IForm extends React.HTMLAttributes<HTMLFormElement> {}

type labelPosition = 'RT' | 'RB' | 'LT' | 'LB';

export interface ILabel {
  title: string;
  className?: string;
  children?: ReactNode;
  position?: labelPosition;
}
