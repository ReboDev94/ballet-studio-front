import { forwardRef, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { ITextArea } from './interfaces';
import { BASE_TEXTAREA_CLASSES, TYPE_TEXTAREA } from './styles';

const Textarea = forwardRef<HTMLTextAreaElement, ITextArea>((props, ref) => {
  const { variant = 'primary', errorState = false, className, ...rest } = props;

  const variantClasses = useMemo(
    () => TYPE_TEXTAREA[errorState ? 'error' : variant],
    [errorState, variant],
  );

  return (
    <textarea
      ref={ref}
      className={twMerge(BASE_TEXTAREA_CLASSES, variantClasses, className)}
      {...rest}
    />
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
