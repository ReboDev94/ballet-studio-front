export const DEFAULT_DROPDOWN_CLASSES = 'group relative inline-block';
export const DEFAULT_DROPDOWN_TOOGLE_CLASSES = 'block m-1';
export const DEFAULT_DROPDOWN_LIST_CLASSES = `bg-white z-[3]
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

const ALIGN_START_CLASSES = 'left-0';
const ALIGN_END_CLASSES = 'right-0';

const ALIGN_START_LATERAL_CLASSES = 'top-0 bottom-auto';
const ALIGN_END_LATERAL_CLASSES = 'bottom-0 top-auto';

const POSITION_TOP_CLASSES = 'top-auto bottom-full';
const POSITION_BOTTOM_CLASSES = 'top-full bottom-auto';
const POSITION_RIGHT_CLASSES = 'left-full top-0';
const POSITION_LEFT_CLASSES = 'right-full top-0';

export const POSITION_TYPE = {
  bottom: POSITION_BOTTOM_CLASSES,
  top: POSITION_TOP_CLASSES,

  right: POSITION_RIGHT_CLASSES,
  left: POSITION_LEFT_CLASSES,
};

export const ALIGN_VERTICAL_TYPE = {
  end: ALIGN_END_CLASSES,
  start: ALIGN_START_CLASSES,
};

export const ALIGN_LATERAL_TYPE = {
  end: ALIGN_END_LATERAL_CLASSES,
  start: ALIGN_START_LATERAL_CLASSES,
};
