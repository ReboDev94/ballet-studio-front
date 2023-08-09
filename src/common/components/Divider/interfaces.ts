import { VARIANT_BASE, VARIANT_PRIMARY } from '../constants';

export interface IDivider {
  className?: string;
  variant?: typeof VARIANT_BASE | typeof VARIANT_PRIMARY;
}


