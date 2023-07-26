import { ReactNode } from 'react';

export type VariantCard = 'default' | 'primary';

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
