import {
  ALING_CENTER,
  ALING_END,
  ALING_START,
  POSITION_BOTTOM,
  POSITION_LEFT,
  POSITION_RIGHT,
  POSITION_TOP,
} from '../constants';

export const DEFAULT_DROPDOWN_CLASSES = 'group relative inline-block';
export const DEFAULT_DROPDOWN_TOOGLE_CLASSES = 'block m-1';
export const DEFAULT_DROPDOWN_LIST_CLASSES = `space-y-1
  bg-white
    z-[3]
    rounded-lg
    p-2
    shadow
    absolute
    w-[10rem]
    min-w-[10rem]
    invisible
    opacity-0
    group-focus-within:opacity-100
    group-focus-within:visible
    group-focus-within:scale-100
    scale-95
    transform
    transition
    duration-200
    ease-out`;
export const DEFAULT_DROPDOWN_LI_CLASSES =
  'text-sm p-2 hover:bg-base-50 text-base-800 cursor-pointer rounded-md';

export const DISABLED_DROPDOWN_LI_CLASSES =
  'bg-base-50  text-base-400 cursor-not-allowed select-none';

const ALIGN_START_CLASSES = 'left-0';
const ALIGN_END_CLASSES = 'right-0';

const ALIGN_START_LATERAL_CLASSES = 'top-0 bottom-auto';
const ALIGN_END_LATERAL_CLASSES = 'bottom-0 top-auto';

const POSITION_TOP_CLASSES = 'top-auto bottom-full';
const POSITION_BOTTOM_CLASSES = 'top-full bottom-auto';
const POSITION_RIGHT_CLASSES = 'left-full top-0';
const POSITION_LEFT_CLASSES = 'right-full top-0';

const POSITION_CENTER_CLASSES = 'top-1/2 -translate-y-1/2';
const ALING_CENTER_CLASSES = 'left-1/2 -translate-x-1/2';

export const POSITION_TYPE = {
  [POSITION_BOTTOM]: POSITION_BOTTOM_CLASSES,
  [POSITION_TOP]: POSITION_TOP_CLASSES,
  [POSITION_RIGHT]: POSITION_RIGHT_CLASSES,
  [POSITION_LEFT]: POSITION_LEFT_CLASSES,
};

export const ALIGN_VERTICAL_TYPE = {
  [ALING_END]: ALIGN_END_CLASSES,
  [ALING_START]: ALIGN_START_CLASSES,
  [ALING_CENTER]: ALING_CENTER_CLASSES,
};

export const ALIGN_LATERAL_TYPE = {
  [ALING_END]: ALIGN_END_LATERAL_CLASSES,
  [ALING_START]: ALIGN_START_LATERAL_CLASSES,
  [ALING_CENTER]: POSITION_CENTER_CLASSES,
};

export const DIVIDER_CLASSES = 'border-b border-base-100 my-2';
