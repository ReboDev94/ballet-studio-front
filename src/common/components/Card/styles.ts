import { VARIANT_DEFAULT, VARIANT_PRIMARY } from '../constants';

/* Card */
export const BASE_CARD_CLASSES = 'rounded-lg shadow-sm w-full';

const DEFAULT_CARD_CLASSES = 'bg-white';
const PRIMARY_CARD_CLASSES = 'border border-primary-800';

export const TYPE_CARD = {
  [VARIANT_DEFAULT]: DEFAULT_CARD_CLASSES,
  [VARIANT_PRIMARY]: PRIMARY_CARD_CLASSES,
};

/* Card body */
export const DEFAULT_CARD_BODY_CLASSES = 'px-6 py-6';
