import React from 'react';
import { twMerge } from 'tailwind-merge';
import {
  ACTIVE_PAGINATION_ITEM,
  PAGINATION_ITEM_CLASSES,
  VARIANT_PAGINATION_ITEM,
} from './styles';
import { IPaginationItem } from './interfaces';

const PaginationItem: React.FC<IPaginationItem> = ({
  page,
  variant,
  active = false,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={twMerge(
        PAGINATION_ITEM_CLASSES,
        VARIANT_PAGINATION_ITEM[variant],
        active && ACTIVE_PAGINATION_ITEM[variant],
      )}
    >
      {page}
    </button>
  );
};

export default PaginationItem;
