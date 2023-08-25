import { ToasterProps } from 'react-hot-toast';

const ERROR_PRIMARY = '#fef2f2';
const ERROR_SECONDARY = '#f87171';

const LOADING_PRIMARY = '#f0f9ff';
const LOADING_SECONDARY = '#0ea5e9';

const SUCCESS_PRIMARY = '#ecfdf5';
const SUCCESS_SECONDARY = '#10b981';

export const DEFAULT_TOAST_OPTIONS: ToasterProps = {
  position: 'top-right',
  toastOptions: {
    success: {
      iconTheme: { primary: SUCCESS_PRIMARY, secondary: SUCCESS_SECONDARY },
      style: {
        background: SUCCESS_SECONDARY,
        color: SUCCESS_PRIMARY,
      },
    },
    loading: {
      iconTheme: { primary: LOADING_SECONDARY, secondary: LOADING_PRIMARY },
      style: {
        background: LOADING_SECONDARY,
        color: LOADING_PRIMARY,
      },
    },
    error: {
      iconTheme: { primary: ERROR_PRIMARY, secondary: ERROR_SECONDARY },
      style: {
        background: ERROR_SECONDARY,
        color: ERROR_PRIMARY,
      },
    },
  },
};
