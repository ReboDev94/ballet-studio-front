import { forwardRef, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { IInput } from './interfaces';
import { BASE_INPUT_CLASSES, TYPE_INPUT } from './styles';

export const Input = forwardRef<HTMLInputElement, IInput>((props, ref) => {
  const { variant = 'primary', errorState = false, ...rest } = props;

  const computedClass = useMemo(
    () => TYPE_INPUT[errorState ? 'error' : variant],
    [variant],
  );

  return (
    <input
      ref={ref}
      className={twMerge(BASE_INPUT_CLASSES, computedClass)}
      {...rest}
    />
  );
});

Input.displayName = 'Input';
