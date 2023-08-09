import { ReactNode } from 'react';
import { VARIANT_DEFAULT, VARIANT_PRIMARY } from '../constants';

export type VariantCard = typeof VARIANT_DEFAULT | typeof VARIANT_PRIMARY;

export interface ICard {
  variant?: VariantCard;
  className?: string;
  children?: ReactNode;
  bordered?: boolean;
}

export interface ICardBody {
  children: ReactNode;
  className?: string;
}
