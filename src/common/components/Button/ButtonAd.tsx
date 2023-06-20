import React, { useMemo } from 'react';
import classNames from 'classnames';
import {
  BASE_BUTTON_CLASSES,
  BLOCK_BUTTON_CLASSES,
  TYPE_BTNS,
} from './constants';
import { IButtonAd } from './interfaces';

export const ButtonAd: React.FC<IButtonAd> = ({
  children,
  variant = 'primary',
  block = false,
  ...rest
}) => {
  const computedClass = useMemo(() => TYPE_BTNS[variant], [variant]);

  return (
    <button
      className={classNames(`${BASE_BUTTON_CLASSES} ${computedClass}`, {
        [BLOCK_BUTTON_CLASSES]: block,
      })}
      {...rest}
    >
      {children}
    </button>
  );
};
