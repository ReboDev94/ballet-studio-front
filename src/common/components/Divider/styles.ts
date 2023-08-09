import { VARIANT_BASE, VARIANT_PRIMARY } from '../constants';

const BASE_DIVIDER_CLASSES = 'border-base-100';
const PRIMARY_DIVIDER_CLASSES = 'border-primary-200';

export const DEFAULT_DIVIDER_CLASSES = 'border-b my-5';
export const TYPE_DIVIDER = {
  [VARIANT_BASE]: BASE_DIVIDER_CLASSES,
  [VARIANT_PRIMARY]: PRIMARY_DIVIDER_CLASSES,
};
