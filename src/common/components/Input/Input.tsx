import { forwardRef, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { IInput } from '../shared/interfaces/inputInterfaces';
import {
  BASE_INPUT_CLASSES,
  BASE_INPUT_FILE_CLASSES,
  SIZE_INPUT,
  TYPE_INPUT,
} from '../shared/styles/inputStyles';
import { VARIANT_ERROR, VARIANT_PRIMARY, SIZE_MD } from '../constants';

const Input = forwardRef<HTMLInputElement, IInput>((props, ref) => {
  const {
    sizeType = SIZE_MD,
    variant = VARIANT_PRIMARY,
    errorState = false,
    type,
    className,
    ...rest
  } = props;

  const variantClasses = useMemo(
    () => TYPE_INPUT[errorState ? VARIANT_ERROR : variant],
    [errorState, variant],
  );

  return (
    <input
      ref={ref}
      type={type}
      className={twMerge(
        BASE_INPUT_CLASSES,
        SIZE_INPUT[sizeType],
        variantClasses,
        type === 'file' && BASE_INPUT_FILE_CLASSES,
        className,
      )}
      {...rest}
    />
  );
});

Input.displayName = 'Input';

export default Input;
