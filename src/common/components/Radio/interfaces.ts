import { InputHTMLAttributes } from 'react';
import { VARIANT_BASE, VARIANT_ERROR, VARIANT_PRIMARY } from '../constants';

export type Variant =
  | typeof VARIANT_PRIMARY
  | typeof VARIANT_ERROR
  | typeof VARIANT_BASE;

export interface IRadio
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  variant?: Variant;
}
