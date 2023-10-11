import { ReactNode } from 'react';
import { SIZE_LG, SIZE_MD, SIZE_SM, SIZE_XS } from '../constants';

type modalSize =
  | typeof SIZE_XS
  | typeof SIZE_SM
  | typeof SIZE_MD
  | typeof SIZE_LG;

export interface IModal {
  value?: boolean;
  size?: modalSize;
  backdrop?: boolean;
  className?: string;
  center?: boolean;
  children: ReactNode;
}

export interface IModalHeader {
  className?: string;
  hiddenClose?: boolean;
  children?: ReactNode;
  onClose?: () => void;
}

export interface IModalBody {
  className?: string;
  children?: ReactNode;
}

export interface IModalFooter {
  className?: string;
  children?: ReactNode;
}
