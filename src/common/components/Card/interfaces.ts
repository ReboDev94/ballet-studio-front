import { ReactNode } from 'react';

export type VariantCard = 'default';

export interface ICard {
  variant?: VariantCard;
  className?: string;
  children?: ReactNode;
}

export interface ICardBody {
  children: ReactNode;
  className?: string;
}
