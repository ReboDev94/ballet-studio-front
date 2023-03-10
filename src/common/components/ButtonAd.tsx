import React from 'react';
import classNames from 'classnames';

type Variant = 'primary';
export interface IButtonAd
  extends Omit<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    'className'
  > {
  variant?: Variant;
  block?: boolean;
}

export const ButtonAd: React.FC<IButtonAd> = ({ children, variant = 'primary', block = false, ...rest }) => {
  return (
    <button
      {...rest}
      className={classNames(
        `py-2.5
            px-5
            inline-block
            text-sm
            text-center
            cursor-pointer
            rounded-md
            font-medium
            outline-none
            focus:ring-4
            transform
            active:scale-95
            transition-transform
            disabled:cursor-not-allowed
            disabled:bg-gray-300
            disabled:text-gray-500
            disabled:active:scale-100`,
        {
          'w-full': block,
          'bg-primary-800 hover:bg-primary-700 text-secondary-900 focus:ring-secondary-900':
            variant === 'primary',
        }
      )}
    >
      {children}
    </button>
  );
};
