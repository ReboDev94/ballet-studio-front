import React, { useMemo } from 'react';
import classNames from 'classnames';
import { IInputAd } from './interfaces';
import { BASE_INPUT_CLASSES, TYPE_INPUT } from './constants';

export const InputAd: React.FC<IInputAd> = ({
  variant = 'primary',
  errorState = false,
  errorMessage,
  ...rest
}) => {
  const computedClass = useMemo(
    () => TYPE_INPUT[errorState ? 'error' : variant],
    [variant],
  );

  return (
    <>
      <input
        className={classNames(`${BASE_INPUT_CLASSES} ${computedClass}`)}
        {...rest}
      />
      {errorState && (
        <label className="px-1 py-2 flex items-center">
          <span className="text-xs text-primary-700">{errorMessage}</span>
        </label>
      )}
    </>
  );
};
