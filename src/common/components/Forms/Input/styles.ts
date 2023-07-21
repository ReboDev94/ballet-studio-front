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
  disabled:text-base-200`;

const PRIMARY_CLASSES =
  'focus:ring-primary-200 focus:border-primary-200 caret-primary-800';

const ERROR_CLASSES =
  'border-primary-800 focus:ring-primary-800 focus:border-primary-800';

export const TYPE_INPUT = {
  primary: PRIMARY_CLASSES,
  error: ERROR_CLASSES,
};

/* Input Error Message */

export const DEFAULT_LABEL_CLASSES = 'px-1 py-2 flex items-center';
export const ERROR_LABEL_CLASSES = 'text-xs text-primary-700';

/* Input Label */

export const DEFAULT_INPUT_LABEL_CLASSES = 'py-2 px-1 flex items-center text-sm';
