import {
  SIZE_LG,
  SIZE_MD,
  SIZE_SM,
  SIZE_XS,
  VARIANT_BASE,
  VARIANT_ERROR,
  VARIANT_PRIMARY,
} from '../constants';

export const LOADING_CLASSES =
  'border-base-200 animate-spin rounded-full border-2';

const LOADING_XS_CLASSES = 'h-4 w-4';
const LOADING_SM_CLASSES = 'h-5 w-5';
const LOADING_MD_CLASSES = 'h-6 w-6';
const LOADING_LG_CLASSES = 'h-7 w-7';

const LOADING_BASE_CLASSES = 'border-t-base-600';
const LOADING_PRIMARY_CLASSES = 'border-t-primary-800';
const LOADING_ERROR_CLASSES = 'border-t-error-500';

export const LOADING_SIZE = {
  [SIZE_XS]: LOADING_XS_CLASSES,
  [SIZE_SM]: LOADING_SM_CLASSES,
  [SIZE_MD]: LOADING_MD_CLASSES,
  [SIZE_LG]: LOADING_LG_CLASSES,
};

export const LOADING_VARIANT = {
  [VARIANT_BASE]: LOADING_BASE_CLASSES,
  [VARIANT_PRIMARY]: LOADING_PRIMARY_CLASSES,
  [VARIANT_ERROR]: LOADING_ERROR_CLASSES,
};
