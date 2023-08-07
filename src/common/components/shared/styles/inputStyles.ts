export const BASE_INPUT_CLASSES = `block
  w-full
  p-2.5
  rounded-lg
  shadow-sm
  border
  border-solid
  border-gray-300
  text-sm
  focus:ring-offset-0
  disabled:cursor-not-allowed
  disabled:bg-gray-300
  disabled:text-base-400`;

export const BASE_INPUT_FILE_CLASSES = 'p-0 file:border-none file:p-2.5';

const PRIMARY_CLASSES = `focus:ring-primary-200
  focus:border-primary-200
  caret-primary-800
  `;

const ERROR_CLASSES = `border-primary-800
  focus:ring-primary-800
  focus:border-primary-800
  `;

export const TYPE_INPUT = {
  primary: PRIMARY_CLASSES,
  error: ERROR_CLASSES,
};

/* Tags */
export const BASE_TAG_DISABLED_CLASSES = 'bg-gray-300 text-base-400';

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
  focus-within:border-primary-200`;

const BASE_TAG_CLASSES = `
  focus-within:ring-base-600
  focus-within:border-base-600`;

const ERROR_TAG_CLASSES = `
  focus-within:ring-primary-800
  focus-within:border-primary-800`;

const ITEM_PRIMARY_CLASSES = 'bg-primary-800 text-white fill-white';
const ITEM_BASE_CLASSES = 'bg-base-600 text-white fill-white';
export const ITEM_DISABLED_CLASSES = [BASE_TAG_DISABLED_CLASSES, 'fill-white'];

export const TYPE_ITEM = {
  primary: ITEM_PRIMARY_CLASSES,
  base: ITEM_BASE_CLASSES,
};

export const TYPE_TAG = {
  primary: PRIMARY_TAG_CLASSES,
  error: ERROR_TAG_CLASSES,
  base: BASE_TAG_CLASSES,
};

export const ICON_TAG_CLASSES = '"h-full w-5 fill-inherit';
