import { VARIANT_PRIMARY } from '../constants';

export const MENU_CLASSES = 'my-2 space-y-2';

/* ITEM SIDEBAR */

export const ITEM_SIDEBAR_CLASSES =
  'group cursor-pointer rounded-md py-3 px-4 flex text-base-400  hover:font-semibold fill-base-400';

const PRIMARY_ITEM_SIDEBAR_CLASSES =
  'hover:text-primary-800 hover:bg-primary-50 hover:fill-primary-800';

const PRIMARY_ACTIVE_ITEM_SIDEBAR_CLASSES =
  'font-semibold text-primary-800 bg-primary-50 fill-primary-800';

export const TYPE_ITEM_SIDEBAR = {
  [VARIANT_PRIMARY]: PRIMARY_ITEM_SIDEBAR_CLASSES,
};

export const TYPE_ACTIVE_ITEM_SIDEBAR = {
  [VARIANT_PRIMARY]: PRIMARY_ACTIVE_ITEM_SIDEBAR_CLASSES,
};

export const ITEM_SIDEBAR_ICON_CLASSES = 'w-6 fill-inherit';
export const ITEM_TITLE_CLASSES = 'px-4 my-auto flex-1 line-clamp-1 text-sm';
export const ITEM_WRAPPER_CLASSES = 'min-w-[24px] my-auto';
export const ITEM_COLLAPSE_MENU_CLASSES = 'ml-6 my-1 border-l border-base-100';
