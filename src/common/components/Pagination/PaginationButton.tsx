import React from 'react';
import { IPaginationButton } from './interfaces';
import { twMerge } from 'tailwind-merge';
import {
  ICON_PAGINATION_BUTTON_CLASSES,
  PAGINATION_BUTTON_CLASSES,
  VARIANT_ICON_PAGINATION_BUTTON,
  VARIANT_PAGINATION_BUTTON,
} from './styles';
import { ArrowDownIcon } from '../assets/svg';

const PaginationButton: React.FC<IPaginationButton> = ({
  children,
  variant,
  positionArrow,
  disabled,
  ...rest
}) => {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={twMerge(
        PAGINATION_BUTTON_CLASSES,
        VARIANT_PAGINATION_BUTTON[variant],
      )}
    >
      {positionArrow === 'left' && (
        <ArrowDownIcon
          className={twMerge(
            'rotate-90',
            ICON_PAGINATION_BUTTON_CLASSES,
            !disabled && VARIANT_ICON_PAGINATION_BUTTON[variant],
          )}
        />
      )}
      {children}
      {positionArrow === 'right' && (
        <ArrowDownIcon
          className={twMerge(
            '-rotate-90',
            ICON_PAGINATION_BUTTON_CLASSES,
            !disabled && VARIANT_ICON_PAGINATION_BUTTON[variant],
          )}
        />
      )}
    </button>
  );
};

export default PaginationButton;
