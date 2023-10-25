import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { VARIANT_PRIMARY } from '../constants';
import { IRadio } from './interfaces';
import { RADIO_CLASSES, VARIANT_RADIO } from './styles';

const Radio = forwardRef<HTMLInputElement, IRadio>((props, ref) => {
  const { variant = VARIANT_PRIMARY, className, ...rest } = props;

  return (
    <input
      ref={ref}
      type="radio"
      className={twMerge(RADIO_CLASSES, VARIANT_RADIO[variant], className)}
      {...rest}
    />
  );
});

Radio.displayName = 'Radio';

export default Radio;
