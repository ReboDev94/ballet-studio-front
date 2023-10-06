import { ButtonHTMLAttributes } from 'react';
import { VARIANT_BASE, VARIANT_PRIMARY } from '../constants/variants';

type Variant = typeof VARIANT_PRIMARY | typeof VARIANT_BASE;

export interface IPagination {
  pageCount: number;
  currentPage: number;
  onChange: (page: number) => void;
  variant?: Variant;
  visiblePages?: number;
}

export interface IPaginationItem
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  page: number;
  variant: Variant;
  active?: boolean;
}

export interface IPaginationButton
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  positionArrow: 'right' | 'left';
  variant: Variant;
}
