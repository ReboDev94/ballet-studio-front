import { forwardRef, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { ITextArea } from '../shared/interfaces/inputInterfaces';
import { BASE_INPUT_CLASSES, TYPE_INPUT } from '../shared/styles/inputStyles';

const Textarea = forwardRef<HTMLTextAreaElement, ITextArea>((props, ref) => {
  const { variant = 'primary', errorState = false, className, ...rest } = props;

  const variantClasses = useMemo(
    () => TYPE_INPUT[errorState ? 'error' : variant],
    [errorState, variant],
  );

  return (
    <textarea
      ref={ref}
      className={twMerge(BASE_INPUT_CLASSES, variantClasses, className)}
      {...rest}
    />
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
