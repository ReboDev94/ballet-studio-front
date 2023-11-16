import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ILoading } from './interfaces';
import { SIZE_XS, VARIANT_PRIMARY } from '../constants';
import { LOADING_CLASSES, LOADING_SIZE, LOADING_VARIANT } from './styles';

const Loading: React.FC<ILoading> = ({
  className,
  variant = VARIANT_PRIMARY,
  size = SIZE_XS,
}) => {
  return (
    <div
      className={twMerge(
        LOADING_CLASSES,
        LOADING_SIZE[size],
        LOADING_VARIANT[variant],
        className,
      )}
    />
  );
};

export default Loading;
