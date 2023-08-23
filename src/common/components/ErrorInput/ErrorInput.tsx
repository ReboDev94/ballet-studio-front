import React from 'react';
import { IErrorInput } from './interfaces';
import { VARIANT_ERROR } from '../constants';
import { twMerge } from 'tailwind-merge';
import {
  ERROR_INPUT_DEFAULT_CLASSES,
  TYPE_ERROR_INPUT,
} from '../shared/styles/inputStyles';

const ErrorInput: React.FC<IErrorInput> = ({
  message,
  variant = VARIANT_ERROR,
}) => {
  return (
    <>
      {message ? (
        <p
          className={twMerge(
            ERROR_INPUT_DEFAULT_CLASSES,
            TYPE_ERROR_INPUT[variant],
          )}
        >
          {message}
        </p>
      ) : null}
    </>
  );
};

export default ErrorInput;
