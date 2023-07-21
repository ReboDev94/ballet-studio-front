import React from 'react';
import { twMerge, twJoin } from 'tailwind-merge';
import { BASE_BUTTON_CLASSES, BLOCK_BUTTON_CLASSES, TYPE_BTNS } from './styles';
import { IButton } from './interfaces';

export const Button: React.FC<IButton> = ({
  children,
  variant = 'primary',
  block = false,
  ...rest
}) => {
  return (
    <button
      className={twMerge(
        twJoin(
          BASE_BUTTON_CLASSES,
          TYPE_BTNS[variant],
          block && BLOCK_BUTTON_CLASSES,
        ),
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
