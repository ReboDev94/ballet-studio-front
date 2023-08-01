import React from 'react';
import { IItemSidebar } from './interfaces';
import { twMerge } from 'tailwind-merge';
import {
  ITEM_SIDEBAR_CLASSES,
  ITEM_SIDEBAR_ICON_CLASSES,
  ITEM_TITLE_CLASSES,
  ITEM_WRAPPER_CLASSES,
  TYPE_ACTIVE_ITEM_SIDEBAR,
  TYPE_ICON_ITEM_SIDEBAR,
  TYPE_ITEM_SIDEBAR,
} from './styles';

const ItemSidebar: React.FC<IItemSidebar> = ({
  title,
  variant = 'primary',
  icon,
  className,
  active = false,
}) => {
  const Icon = icon;

  return (
    <li>
      <div
        className={twMerge(
          ITEM_SIDEBAR_CLASSES,
          TYPE_ITEM_SIDEBAR[variant],
          active && TYPE_ACTIVE_ITEM_SIDEBAR[variant],
          className,
        )}
      >
        <div className={ITEM_WRAPPER_CLASSES}>
          {Icon && (
            <Icon
              className={twMerge(
                ITEM_SIDEBAR_ICON_CLASSES,
                TYPE_ICON_ITEM_SIDEBAR[variant],
              )}
            />
          )}
        </div>
        <span className={ITEM_TITLE_CLASSES}>{title}</span>
      </div>
    </li>
  );
};

export default ItemSidebar;