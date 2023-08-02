import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IDropdown } from './interfaces';
import { DEFAULT_DROPDOWN_CLASSES } from './styles';

const Dropdown = React.forwardRef<HTMLDivElement, IDropdown>(
  ({ className, ...props }, ref) => {
    return (
      <div
        role="listbox"
        ref={ref}
        className={twMerge(DEFAULT_DROPDOWN_CLASSES, className)}
        {...props}
      />
    );
  },
);

Dropdown.displayName = 'Dropdown';

export default Dropdown;
