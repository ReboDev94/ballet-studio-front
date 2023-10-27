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

export const BASE_BUTTON_CLASSES = `
  px-4
  inline-block
  text-center
  rounded-md
  font-medium
  outline-none
  focus:ring-4
  transform
  active:scale-95
  transition-transform
  disabled:cursor-not-allowed
 disabled:bg-base-100
  disabled:text-base-300
  disabled:active:scale-100`;

export const BLOCK_BUTTON_CLASSES = 'w-full';

const PRIMARY_CLASSES =
  'bg-primary-800 hover:bg-primary-700 text-primary-100 focus:ring-primary-100';

const OUTLINE_PRIMARY_CLASSES =
  'border border-primary-800  text-primary-800 focus:ring-primary-100';

const BASE_CLASSES =
  'bg-base-600 hover:bg-base-500 text-white focus:ring-base-100';

const OUTLINE_BASE_CLASSES =
  'border border-base-600  text-base-600 focus:ring-base-100';

const ERROR_CLASSES =
  'bg-error-700 hover:bg-error-700 text-error-100 focus:ring-error-100 fill-base-50';

const OUTLINE_ERROR_CLASSES =
  'border border-error-700  text-error-700 focus:ring-error-100 fill-error-700';

export const TYPE_BTNS = {
  [VARIANT_PRIMARY]: PRIMARY_CLASSES,
  [VARIANT_OUTLINE_PRIMARY]: OUTLINE_PRIMARY_CLASSES,
  [VARIANT_BASE]: BASE_CLASSES,
  [VARIANT_OUTLINE_BASE]: OUTLINE_BASE_CLASSES,
  [VARIANT_ERROR]: ERROR_CLASSES,
  [VARIANT_OUTLINE_ERROR]: OUTLINE_ERROR_CLASSES,
};

const SIZE_XS_BTN_CLASSES = 'h-8 text-xs';
const SIZE_SM_BTN_CLASSES = 'h-9 text-sm';
const SIZE_MD_BTN_CLASSES = 'h-10 text-sm';
const SIZE_LG_BTN_CLASSES = 'h-12 text-base';

export const SIZE_BTNS = {
  [SIZE_XS]: SIZE_XS_BTN_CLASSES,
  [SIZE_SM]: SIZE_SM_BTN_CLASSES,
  [SIZE_MD]: SIZE_MD_BTN_CLASSES,
  [SIZE_LG]: SIZE_LG_BTN_CLASSES,
};
