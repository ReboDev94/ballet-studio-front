export const BASE_BUTTON_CLASSES = `py-2.5
  px-5
  inline-block
  text-sm
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
  'border border-primary-800 hover:bg-primary-800 hover:text-primary-100 text-primary-800 focus:ring-primary-100';


const BASE_CLASSES =
  'bg-base-600 hover:bg-base-500 text-white focus:ring-base-100';

const OUTLINE_BASE_CLASSES =
  'border border-base-600 hover:bg-base-600 hover:text-white text-base-600 focus:ring-base-100';


export const TYPE_BTNS = {
  primary: PRIMARY_CLASSES,
  'outline-primary': OUTLINE_PRIMARY_CLASSES,
  base: BASE_CLASSES,
  'outline-base': OUTLINE_BASE_CLASSES,
};
