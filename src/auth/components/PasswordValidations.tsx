import { Radio } from '@/common/components';
import React, { useMemo } from 'react';

const PasswordValidations: React.FC<{ password: string }> = ({ password }) => {
  const { lower, upper, digit, character } = useMemo(() => {
    return {
      lower: /[a-z]/.test(password),
      upper: /[A-Z]/.test(password),
      digit: /\d/.test(password),
      character: /[#$@!%&*?]/.test(password),
    };
  }, [password]);

  return (
    <ul className="space-y-2 text-xs">
      <li>
        <label htmlFor="lower" className="flex gap-2 items-start">
          <Radio id="lower" disabled checked={lower} />
          Debe contener al menos una letra minúscula.
        </label>
      </li>
      <li>
        <label htmlFor="upper" className="flex gap-2 items-start">
          <Radio id="upper" disabled checked={upper} />
          Debe contener al menos una letra mayúscula
        </label>
      </li>
      <li>
        <label htmlFor="digit" className="flex gap-2 items-start">
          <Radio id="digit" disabled checked={digit} />
          Debe contener al menos un dígito
        </label>
      </li>
      <li>
        <label htmlFor="character" className="flex gap-2 items-start">
          <Radio id="character" disabled checked={character} />
          Debe contener al menos un carácter especial entre #, $, @, !, %, &, *,
          o ?
        </label>
      </li>
    </ul>
  );
};

export default PasswordValidations;
