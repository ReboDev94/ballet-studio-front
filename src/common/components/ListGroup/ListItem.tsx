import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IItemListGroup } from './interfaces';
import {
  DEFAULT_ITEM_LIST_GROUP_CLASSES,
  ICON_ITEM_CLASSES,
  TYPE_ITEM,
  WRAPPER_ITEM_CLASSES,
} from './styles';
import { VARIANT_BASE } from '../constants';

const ListItem: React.FC<IItemListGroup> = ({
  variant = VARIANT_BASE,
  icon,
  children,
  className,
}) => {
  const Icon = icon;
  return (
    <li
      className={twMerge(
        DEFAULT_ITEM_LIST_GROUP_CLASSES,
        TYPE_ITEM[variant],
        className,
      )}
    >
      <div className={WRAPPER_ITEM_CLASSES}>
        {Icon && <Icon className={twMerge(ICON_ITEM_CLASSES)} />}
        {children}
      </div>
    </li>
  );
};

export default ListItem;
