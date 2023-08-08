import { ReactNode } from 'react';
import {
  VARIANT_PRIMARY,
  VARIANT_BASE,
  SIZE_XS,
  SIZE_SM,
  SIZE_MD,
  SIZE_LG,
  SHAPE_CIRCLE,
  SHAPE_SQUARED,
} from '../constants';

type SizeAvatar =
  | typeof SIZE_XS
  | typeof SIZE_SM
  | typeof SIZE_MD
  | typeof SIZE_LG;
type ShapeAvatar = typeof SHAPE_CIRCLE | typeof SHAPE_SQUARED;
type VariantBorder = typeof VARIANT_PRIMARY | typeof VARIANT_BASE;
type VariantBackGround = typeof VARIANT_PRIMARY | typeof VARIANT_BASE;

export interface IAvatar {
  size?: SizeAvatar;
  shape?: ShapeAvatar;
  border?: boolean;
  borderVariant?: VariantBorder;
  bgVariant?: VariantBackGround;
  className?: string;
  title?: string;
  src?: string;
  children?: ReactNode;
}
