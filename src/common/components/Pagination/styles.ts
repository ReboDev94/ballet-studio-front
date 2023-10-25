import { VARIANT_BASE, VARIANT_PRIMARY } from '../constants';

export const PAGINATION_CLASSES =
  'bg-white inline-flex gap-2 px-3 py-2 rounded-lg shadow';

const BASE_BUTTONS =
  'h-7 text-xs rounded-md flex items-center justify-center font-medium';

export const PAGINATION_ITEM_CLASSES = `w-[2rem] bg-base-100 cursor-pointer select-none ${BASE_BUTTONS}`;

export const PAGINATION_BUTTON_CLASSES = `px-2 disabled:text-base-200 min-w-[4rem] ${BASE_BUTTONS}`;

const PRIMARY_PAGINATION_ITEM_CLASSES = 'hover:bg-primary-800 hover:text-white';
const PRIMARY_ACTIVE_PAGINATION_ITEM_CLASSES = 'bg-primary-800 text-white';
const PRIMARY_PAGINATION_BUTTON_CLASSES = 'text-primary-800';
const PRIMARY_ICON_PAGINATION_BUTTON_CLASSES = 'fill-primary-800';

const BASE_PAGINATION_ITEM_CLASSES = 'hover:bg-base-600 hover:text-base-50';
const BASE_ACTIVE_PAGINATION_ITEM_CLASSES = 'bg-base-600 text-base-50';
const BASE_PAGINATION_BUTTON_CLASSES = 'text-base-600';
const BASE_ICON_PAGINATION_BUTTON_CLASSES = 'fill-base-600';

export const ICON_PAGINATION_BUTTON_CLASSES = 'h-4 w-4 fill-base-200';

export const VARIANT_PAGINATION_ITEM = {
  [VARIANT_BASE]: BASE_PAGINATION_ITEM_CLASSES,
  [VARIANT_PRIMARY]: PRIMARY_PAGINATION_ITEM_CLASSES,
};

export const ACTIVE_PAGINATION_ITEM = {
  [VARIANT_BASE]: BASE_ACTIVE_PAGINATION_ITEM_CLASSES,
  [VARIANT_PRIMARY]: PRIMARY_ACTIVE_PAGINATION_ITEM_CLASSES,
};

export const VARIANT_PAGINATION_BUTTON = {
  [VARIANT_BASE]: BASE_PAGINATION_BUTTON_CLASSES,
  [VARIANT_PRIMARY]: PRIMARY_PAGINATION_BUTTON_CLASSES,
};

export const VARIANT_ICON_PAGINATION_BUTTON = {
  [VARIANT_BASE]: BASE_ICON_PAGINATION_BUTTON_CLASSES,
  [VARIANT_PRIMARY]: PRIMARY_ICON_PAGINATION_BUTTON_CLASSES,
};
