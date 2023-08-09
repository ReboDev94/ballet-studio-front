import React from 'react';
import { IDivider } from './interfaces';
import { VARIANT_BASE } from '../constants';
import { twMerge } from 'tailwind-merge';
import { DEFAULT_DIVIDER_CLASSES, TYPE_DIVIDER } from './styles';

const Divider: React.FC<IDivider> = ({ className, variant = VARIANT_BASE }) => {
  return (
    <div
      className={twMerge(
        DEFAULT_DIVIDER_CLASSES,
        TYPE_DIVIDER[variant],
        className,
      )}
    />
  );
};

export default Divider;
