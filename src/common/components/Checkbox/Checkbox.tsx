import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { VARIANT_PRIMARY } from '../constants';
import { ICheckBox } from './interfaces';
import { CHECKBOX_CLASSES, VARIANT_CHECKBOX } from './styles';

const Checkbox = forwardRef<HTMLInputElement, ICheckBox>((props, ref) => {
  const { variant = VARIANT_PRIMARY, className, ...rest } = props;

  return (
    <input
      ref={ref}
      type="checkbox"
      className={twMerge(
        CHECKBOX_CLASSES,
        VARIANT_CHECKBOX[variant],
        className,
      )}
      {...rest}
    />
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
