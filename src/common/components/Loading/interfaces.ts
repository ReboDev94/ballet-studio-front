import {
  SIZE_LG,
  SIZE_MD,
  SIZE_SM,
  SIZE_XS,
  VARIANT_BASE,
  VARIANT_ERROR,
  VARIANT_PRIMARY,
} from '../constants';

type VariantLoading =
  | typeof VARIANT_BASE
  | typeof VARIANT_ERROR
  | typeof VARIANT_PRIMARY;

type SizeLoading =
  | typeof SIZE_XS
  | typeof SIZE_SM
  | typeof SIZE_MD
  | typeof SIZE_LG;

export interface ILoading {
  className?: string;
  variant?: VariantLoading;
  size?: SizeLoading;
}
