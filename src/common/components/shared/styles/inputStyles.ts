import {
  SIZE_LG,
  SIZE_MD,
  SIZE_SM,
  SIZE_XS,
  VARIANT_BASE,
  VARIANT_ERROR,
  VARIANT_PRIMARY,
} from '../../constants';

const SIZE_XS_INPUT_CLASSES = 'h-[36px] px-2 py-2';
const SIZE_SM_INPUT_CLASSES = 'h-[40px] px-2 py-2.5';
const SIZE_MD_INPUT_CLASSES = 'h-[42px] px-2 py-2.5 ';
const SIZE_LG_INPUT_CLASSES = 'h-[48px] px-2 py-2.5';

export const BASE_INPUT_CLASSES = `
  block
  w-full
  rounded-lg
  shadow-sm
  border
  border-solid
  border-base-200
  focus:ring-offset-0
  disabled:cursor-not-allowed
  disabled:bg-base-50
  disabled:text-base-300
  text-sm`;

export const BASE_INPUT_FILE_CLASSES =
  'p-0 file:px-2 file:py-2.5 file:border-none';

const PRIMARY_CLASSES = `
  focus:ring-primary-200
  focus:border-primary-200
  caret-primary-800
  focus-within:ring-primary-200
  focus-within:border-primary-200
  focus-within:ring-1
  `;

const ERROR_CLASSES = `
  border-error-800
  focus:ring-error-800
  focus:border-error-800
  focus-within:ring-error-800
  focus-within:border-error-800
  focus-within:ring-1
  `;

const BASE_CLASSES = `
  focus:ring-base-600
  focus:border-base-600
  caret-base-600
  focus-within:ring-base-600
  focus-within:border-base-600
  focus-within:ring-1`;

export const TYPE_INPUT = {
  [VARIANT_PRIMARY]: PRIMARY_CLASSES,
  [VARIANT_ERROR]: ERROR_CLASSES,
  [VARIANT_BASE]: BASE_CLASSES,
};

export const SIZE_INPUT = {
  [SIZE_XS]: SIZE_XS_INPUT_CLASSES,
  [SIZE_SM]: SIZE_SM_INPUT_CLASSES,
  [SIZE_MD]: SIZE_MD_INPUT_CLASSES,
  [SIZE_LG]: SIZE_LG_INPUT_CLASSES,
};

/* Tags */
export const BASE_TAG_DISABLED_CLASSES = 'bg-base-100 text-base-300';

export const BASE_INPUT_TAG_CLASSES =
  'group min-h-[42px] focus-within:ring-1 px-2.5 py-[5px] flex items-center gap-2 flex-wrap';

export const BASE_INPUT_TAG_DISABLED_CLASSES = [
  BASE_TAG_DISABLED_CLASSES,
  'focus-within:ring-0',
  'focus-within:border-transparent',
];

export const DEFAULT_INPUT_INTERNAL_TAG_CLASSES =
  'p-0 h-[32px] flex-1 max-w-full border-transparent text-sm border focus:border-transparent focus:ring-0';

export const WRAPPER_ALL_TAGS_CLASSES = 'min-h-[32px] flex flex-wrap gap-2';

export const ITEM_TAG_CLASSES =
  'select-none inline-flex items-center gap-2 border rounded-lg px-2 font-medium h-[32px]';

const PRIMARY_TAG_CLASSES = `
  focus-within:ring-primary-200
  focus-within:border-primary-200 focus-within:ring-1`;

const BASE_TAG_CLASSES = `
  focus-within:ring-base-600
  focus-within:border-base-600 focus-within:ring-1`;

const ERROR_TAG_CLASSES = `
  focus-within:ring-error-800
  focus-within:border-error-800 focus-within:ring-1`;

const ITEM_PRIMARY_CLASSES = 'bg-primary-800 text-white fill-white';
const ITEM_BASE_CLASSES = 'bg-base-600 text-white fill-white';
export const ITEM_DISABLED_CLASSES = [BASE_TAG_DISABLED_CLASSES, 'fill-white'];

export const TYPE_ITEM = {
  [VARIANT_PRIMARY]: ITEM_PRIMARY_CLASSES,
  [VARIANT_BASE]: ITEM_BASE_CLASSES,
};

export const TYPE_TAG = {
  [VARIANT_PRIMARY]: PRIMARY_TAG_CLASSES,
  [VARIANT_ERROR]: ERROR_TAG_CLASSES,
  [VARIANT_BASE]: BASE_TAG_CLASSES,
};

export const ICON_TAG_CLASSES = '"h-full w-5 fill-inherit';

export const ERROR_INPUT_DEFAULT_CLASSES = 'text-xs mt-1';

const ERROR_INPUT_PRIMARY_CLASSES = 'text-primary-800';
const ERROR_INPUT_ERROR_CLASSES = 'text-error-800';
const ERROR_INPUT_BASE_CLASSES = 'text-base-600';

export const TYPE_ERROR_INPUT = {
  [VARIANT_PRIMARY]: ERROR_INPUT_PRIMARY_CLASSES,
  [VARIANT_ERROR]: ERROR_INPUT_ERROR_CLASSES,
  [VARIANT_BASE]: ERROR_INPUT_BASE_CLASSES,
};
