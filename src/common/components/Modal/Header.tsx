import React from 'react';
import { twMerge } from 'tailwind-merge';
import {
  MODAL_HEADER_CLASSES,
  MODAL_HEADER_ONLY_BUTTON_CLASSES,
} from './styles';
import { IModalHeader } from './interfaces';
import { IconX } from '../assets/svg';

const Header: React.FC<IModalHeader> = ({
  className = '',
  hiddenClose = false,
  children,
  onClose,
}) => {
  return (
    <div
      className={twMerge(
        MODAL_HEADER_CLASSES,
        !children && MODAL_HEADER_ONLY_BUTTON_CLASSES,
        className,
      )}
    >
      {children}
      {!hiddenClose && (
        <button
          type="button"
          className="px-2 py-1"
          onClick={() => onClose && onClose()}
        >
          <IconX className="fill-base-600 h-5" />
        </button>
      )}
    </div>
  );
};

export default Header;
