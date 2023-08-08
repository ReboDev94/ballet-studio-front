import { FC, ReactNode, SVGProps } from 'react';

export interface IListGroup extends React.HTMLAttributes<HTMLUListElement> {}

type VariantItemListGroup = 'base' | 'primary';

export interface IItemListGroup {
  icon?: FC<SVGProps<SVGSVGElement>>;
  variant?: VariantItemListGroup;
  className?: string;
  children: ReactNode;
}
