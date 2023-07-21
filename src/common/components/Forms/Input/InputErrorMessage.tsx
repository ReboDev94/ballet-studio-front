import { twMerge } from 'tailwind-merge';
import { IInputErrorMessage } from './interfaces';
import { DEFAULT_LABEL_CLASSES, ERROR_LABEL_CLASSES } from './styles';

export const InputErrorMessage = ({
  message,
  className,
}: IInputErrorMessage) => {
  if (!message) return;
  return (
    <label
      className={twMerge(DEFAULT_LABEL_CLASSES, ERROR_LABEL_CLASSES, className)}
    >
      {message}
    </label>
  );
};
