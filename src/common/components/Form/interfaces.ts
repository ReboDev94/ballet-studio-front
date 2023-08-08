import { FormHTMLAttributes, ReactNode } from 'react';
import {
  POSITION_RT,
  POSITION_LB,
  POSITION_LT,
  POSITION_RB,
} from '../constants';

export interface IForm extends FormHTMLAttributes<HTMLFormElement> {}

type labelPosition =
  | typeof POSITION_RT
  | typeof POSITION_LB
  | typeof POSITION_LT
  | typeof POSITION_RB;

export interface ILabel {
  title: string;
  className?: string;
  children?: ReactNode;
  position?: labelPosition;
}
