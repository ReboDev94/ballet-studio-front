import { FC, ReactNode, SVGProps } from 'react';
import { VARIANT_BASE, VARIANT_PRIMARY } from '../constants';

export interface IListGroup extends React.HTMLAttributes<HTMLUListElement> {}

type VariantItemListGroup = typeof VARIANT_BASE | typeof VARIANT_PRIMARY;

export interface IItemListGroup {
  icon?: FC<SVGProps<SVGSVGElement>>;
  variant?: VariantItemListGroup;
  className?: string;
  children: ReactNode;
}
