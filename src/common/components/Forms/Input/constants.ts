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

export const PRIMARY_CLASSES =
  'focus:ring-primary-200 focus:border-primary-200 caret-primary-900';

export const ERROR_CLASSES =
  'border-primary-900 focus:ring-primary-900 focus:border-primary-900';

export const TYPE_INPUT = {
  primary: PRIMARY_CLASSES,
  error: ERROR_CLASSES,
};
