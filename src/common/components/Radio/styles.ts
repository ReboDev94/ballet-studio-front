import { VARIANT_BASE, VARIANT_ERROR, VARIANT_PRIMARY } from '../constants';

export const RADIO_CLASSES = 'rounded-full h-5 w-5';

const BASE_RADIO_CLASSES =
  'text-base-600 focus:ring-1 focus:ring-base-600 border border-base-600';
const ERROR_RADIO_CLASSES =
  'text-error-500 focus:ring-1 focus:ring-error-500 border border-error-500';
const PRIMARY_RADIO_CLASSES =
  'text-primary-800 focus:ring-1 focus:ring-primary-800 border border-primary-800';

export const VARIANT_RADIO = {
  [VARIANT_BASE]: BASE_RADIO_CLASSES,
  [VARIANT_ERROR]: ERROR_RADIO_CLASSES,
  [VARIANT_PRIMARY]: PRIMARY_RADIO_CLASSES,
};
