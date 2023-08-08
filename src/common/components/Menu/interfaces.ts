import React, { FC, ReactNode, SVGProps } from 'react';
import { VARIANT_PRIMARY } from '../constants';

export interface IMenu extends React.HTMLAttributes<HTMLUListElement> {}

type VariantItemSidebar = typeof VARIANT_PRIMARY;
export interface IItemSidebar {
  title: string;
  variant?: VariantItemSidebar;
  className?: string;
  icon?: FC<SVGProps<SVGSVGElement>>;
  active?: boolean;
}

export interface ICollapseSidebar extends Omit<IItemSidebar, 'active'> {
  children: ReactNode;
}
