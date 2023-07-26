import { forwardRef, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { IInput } from './interfaces';
import { BASE_INPUT_CLASSES, TYPE_INPUT } from './styles';

const Input = forwardRef<HTMLInputElement, IInput>((props, ref) => {
  const { variant = 'primary', errorState = false, className, ...rest } = props;

  const variantClasses = useMemo(
    () => TYPE_INPUT[errorState ? 'error' : variant],
    [errorState, variant],
  );

  return (
    <input
      ref={ref}
      className={twMerge(BASE_INPUT_CLASSES, variantClasses, className)}
      {...rest}
    />
  );
});

Input.displayName = 'Input';

export default Input;
