import React from 'react';
import { createPortal } from 'react-dom';
import { IModal } from './interfaces';
import BackDrop from './BackDrop';
import { twMerge } from 'tailwind-merge';
import {
  MODAL_CLASSES,
  MODAL_CONTAINER_CLASSES,
  MODAL_WRAPPER_CENTER,
  MODAL_WRAPPER_CLASSES,
} from './styles';

const Modal: React.FC<IModal> = ({
  value = false,
  className = '',
  size = 'xs',
  backdrop = true,
  center = false,
  children,
}) => {
  if (!value) return null;
  return createPortal(
    <>
      {backdrop && <BackDrop />}
      <div className={twMerge(MODAL_CONTAINER_CLASSES, className)}>
        <div
          className={twMerge(
            MODAL_WRAPPER_CLASSES,
            center && MODAL_WRAPPER_CENTER,
          )}
        >
          <div
            className={twMerge(
              MODAL_CLASSES,
              size === 'xs' && 'md:w-2/6',
              size === 'sm' && 'md:w-2/4',
              size === 'md' && 'md:w-3/4',
              size === 'lg' && 'md:w-full',
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
};

export default Modal;
