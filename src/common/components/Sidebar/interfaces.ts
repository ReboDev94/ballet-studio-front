import { ElementType, ReactNode } from 'react';
/* Sidebar */
export interface ISidebar {
  className?: string;
  children?: ReactNode;
  width?: number;
  minWidth?: number;
  right?: boolean;
}

export interface IContent {
  children: ReactNode;
  className?: string;
}

export interface ICategory {
  title: string;
  className?: string;
  tag?: ElementType;
}
/* Sidebar Header */
export interface IHeader {
  children: ReactNode;
  className?: string;
}

/* Sidebar BackDrop */

export interface IBackDrop {
  className?: string;
  onClick?: () => void;
}
