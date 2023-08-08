import { ButtonHTMLAttributes } from 'react';
import {
  VARIANT_BASE,
  VARIANT_OUTLINE_BASE,
  VARIANT_OUTLINE_PRIMARY,
  VARIANT_PRIMARY,
} from '../constants';

export type VariantBtn =
  | typeof VARIANT_BASE
  | typeof VARIANT_OUTLINE_BASE
  | typeof VARIANT_PRIMARY
  | typeof VARIANT_OUTLINE_PRIMARY;

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantBtn;
  block?: boolean;
}
