import { forwardRef, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import {
  BASE_INPUT_CLASSES,
  SIZE_INPUT,
  TYPE_INPUT,
} from '../shared/styles/inputStyles';
import { SIZE_MD, VARIANT_ERROR, VARIANT_PRIMARY } from '../constants';
import { ISelect } from '../shared/interfaces/inputInterfaces';

const Select = forwardRef<HTMLSelectElement, ISelect>((props, ref) => {
  const {
    sizeType = SIZE_MD,
    variant = VARIANT_PRIMARY,
    errorState = false,
    className,
    children,
    ...rest
  } = props;

  const variantClasses = useMemo(
    () => TYPE_INPUT[errorState ? VARIANT_ERROR : variant],
    [errorState, variant],
  );

  return (
    <select
      ref={ref}
      className={twMerge(
        BASE_INPUT_CLASSES,
        SIZE_INPUT[sizeType],
        variantClasses,
        className,
      )}
      {...rest}
    >
      {children}
    </select>
  );
});

Select.displayName = 'Select';

export default Select;
