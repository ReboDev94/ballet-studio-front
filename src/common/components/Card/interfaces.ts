import { ReactNode } from 'react';
import { Variant } from './styles';

export interface ICard {
  variant?: Variant;
  className?: string;
  children?: ReactNode;
}

export interface ICardBody {
  children: ReactNode;
  className?: string;
}
