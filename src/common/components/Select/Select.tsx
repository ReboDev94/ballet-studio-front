import { forwardRef, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { BASE_INPUT_CLASSES, TYPE_INPUT } from '../shared/styles/inputStyles';
import { VARIANT_ERROR, VARIANT_PRIMARY } from '../constants';
import { ISelect } from '../shared/interfaces/inputInterfaces';

const Select = forwardRef<HTMLSelectElement, ISelect>((props, ref) => {
  const {
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
      className={twMerge(BASE_INPUT_CLASSES, variantClasses, className)}
      {...rest}
    >
      {children}
    </select>
  );
});

Select.displayName = 'Select';

export default Select;
