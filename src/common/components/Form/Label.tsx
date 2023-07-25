import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ILabel } from './interfaces';
import {
  DEFAULT_LABEL_CLASSES,
  DEFAULT_LABEL_CONTAINER_CLASSES,
  LABEL_RIGHT_CLASSES,
} from './styles';

const Label: React.FC<ILabel> = ({
  title,
  position = 'LT',
  children,
  className,
}) => {
  return (
    <div className={twMerge(DEFAULT_LABEL_CONTAINER_CLASSES, className)}>
      {['RT', 'LT'].includes(position) && (
        <label
          className={twMerge(
            DEFAULT_LABEL_CLASSES,
            'pb-2',
            position === 'RT' && LABEL_RIGHT_CLASSES,
          )}
        >
          {title}
        </label>
      )}

      {children}

      {['RB', 'LB'].includes(position) && (
        <label
          className={twMerge(
            DEFAULT_LABEL_CLASSES,
            'pt-2',
            position === 'RB' && LABEL_RIGHT_CLASSES,
          )}
        >
          {title}
        </label>
      )}
    </div>
  );
};

export default Label;
