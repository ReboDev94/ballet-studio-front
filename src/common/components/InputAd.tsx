import React, { useMemo } from 'react';
import classNames from 'classnames';

export type Variant = 'primary' | 'secondary' | 'error';
export interface IInputAd
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'className'
  > {
  variant?: Variant;
  errorState?: boolean;
  errorMessage?: string;
}

export const InputAd: React.FC<IInputAd> = ({
  variant = 'primary',
  errorState = false,
  errorMessage,
  ...rest
}) => {
  const memoVariant = useMemo(
    () => (errorState ? 'error' : variant),
    [errorState],
  );

  return (
    <>
      <input
        className={classNames(
          `block
            w-full
            p-2.5
            rounded-lg
            shadow-sm
            border
            border-solid
            border-gray-300
            text-gray-700
            text-sm
            focus:ring-offset-0
            disabled:cursor-not-allowed
            disabled:bg-gray-300
            disabled:text-gray-500
            caret-primary-800
            `,
          {
            'border-primary-800 focus:ring-primary-800 focus:border-primary-800':
              memoVariant === 'error',
            'focus:ring-secondary-200 focus:border-secondary-200':
              memoVariant === 'secondary',
          },
        )}
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
