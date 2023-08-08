import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ILabel } from './interfaces';
import {
  DEFAULT_LABEL_CLASSES,
  DEFAULT_LABEL_CONTAINER_CLASSES,
  LABEL_RIGHT_CLASSES,
} from './styles';
import {
  POSITION_LB,
  POSITION_LT,
  POSITION_RB,
  POSITION_RT,
} from '../constants';

const FormLabel: React.FC<ILabel> = ({
  title,
  position = POSITION_LT,
  children,
  className,
}) => {
  return (
    <div className={twMerge(DEFAULT_LABEL_CONTAINER_CLASSES, className)}>
      {[POSITION_RT, POSITION_LT].includes(position) && (
        <label
          className={twMerge(
            DEFAULT_LABEL_CLASSES,
            'pb-2',
            position === POSITION_RT && LABEL_RIGHT_CLASSES,
          )}
        >
          {title}
        </label>
      )}

      {children}

      {[POSITION_RB, POSITION_LB].includes(position) && (
        <label
          className={twMerge(
            DEFAULT_LABEL_CLASSES,
            'pt-2',
            position === POSITION_RB && LABEL_RIGHT_CLASSES,
          )}
        >
          {title}
        </label>
      )}
    </div>
  );
};

export default FormLabel;
