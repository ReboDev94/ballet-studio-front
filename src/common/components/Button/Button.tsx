import React from 'react';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
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
        classNames(BASE_BUTTON_CLASSES, TYPE_BTNS[variant], {
          [BLOCK_BUTTON_CLASSES]: block,
        }),
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
