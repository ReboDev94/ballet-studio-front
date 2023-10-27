import { ButtonHTMLAttributes } from 'react';
import {
  SIZE_LG,
  SIZE_MD,
  SIZE_SM,
  SIZE_XS,
  VARIANT_BASE,
  VARIANT_ERROR,
  VARIANT_OUTLINE_BASE,
  VARIANT_OUTLINE_ERROR,
  VARIANT_OUTLINE_PRIMARY,
  VARIANT_PRIMARY,
} from '../constants';

export type VariantBtn =
  | typeof VARIANT_BASE
  | typeof VARIANT_OUTLINE_BASE
  | typeof VARIANT_PRIMARY
  | typeof VARIANT_OUTLINE_PRIMARY
  | typeof VARIANT_ERROR
  | typeof VARIANT_OUTLINE_ERROR;

export type SizeBtn =
  | typeof SIZE_XS
  | typeof SIZE_SM
  | typeof SIZE_MD
  | typeof SIZE_LG;

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantBtn;
  block?: boolean;
  size?: SizeBtn;
}
