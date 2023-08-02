export const DEFAULT_AVATAR_CLASSES = 'shadow-md grid place-content-center';

const CIRCLE_AVATAR_CLASSES = 'rounded-full';
const SQUARED_AVATAR_CLASSES = 'rounded-md';

const XS_AVATAR_CLASSES = 'h-10 w-10 text-sm';
const SM_AVATAR_CLASSES = 'h-14 w-14 text-md';
const MD_AVATAR_CLASSES = 'h-24 w-24 text-3xl';
const LG_AVATAR_CLASSES = 'h-32 w-32 text-5xl';

export const SIZE_AVATAR = {
  xs: XS_AVATAR_CLASSES,
  sm: SM_AVATAR_CLASSES,
  md: MD_AVATAR_CLASSES,
  lg: LG_AVATAR_CLASSES,
};

export const SHAPE_AVATAR = {
  circle: CIRCLE_AVATAR_CLASSES,
  squared: SQUARED_AVATAR_CLASSES,
};

const BORDER_BASE_AVATAR_CLASSES = 'outline-base-500';
const BORDER_PRIMARY_AVATAR_CLASSES = 'outline-primary-800';

const BACKGROUND_BASE_AVATAR_CLASSES = 'bg-base-500 text-white';
const BACKGROUND_PRIMARY_AVATAR_CLASSES = 'bg-primary-800 text-base-100';

export const BORDER_VARIANT_AVATAR = {
  base: BORDER_BASE_AVATAR_CLASSES,
  primary: BORDER_PRIMARY_AVATAR_CLASSES,
};

export const BACKGROUND_VARIANT_AVATAR = {
  base: BACKGROUND_BASE_AVATAR_CLASSES,
  primary: BACKGROUND_PRIMARY_AVATAR_CLASSES,
};

export const BORDER_AVATAR_CLASSES = 'outline outline-offset-1 m-1';
