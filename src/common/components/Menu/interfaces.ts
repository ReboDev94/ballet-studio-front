import React, { FC, ReactNode, SVGProps } from 'react';

export interface IMenu extends React.HTMLAttributes<HTMLUListElement> {}

type VariantItemSidebar = 'primary';
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
