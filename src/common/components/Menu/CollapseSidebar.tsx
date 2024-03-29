import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import {
  TYPE_ITEM_SIDEBAR,
  ITEM_TITLE_CLASSES,
  ITEM_WRAPPER_CLASSES,
  ITEM_SIDEBAR_CLASSES,
  ITEM_SIDEBAR_ICON_CLASSES,
  ITEM_COLLAPSE_MENU_CLASSES,
} from './styles';
import { ICollapseSidebar } from './interfaces';
import { ArrowDownIcon } from '../assets/svg';
import { VARIANT_PRIMARY } from '../constants';

const CollapseSidebar: React.FC<ICollapseSidebar> = ({
  title,
  variant = VARIANT_PRIMARY,
  icon,
  className,
  children,
}) => {
  const Icon = icon;
  const [isCollapse, setisCollapse] = useState(true);

  return (
    <li>
      <div
        onClick={() => {
          setisCollapse(!isCollapse);
        }}
        className={twMerge(
          ITEM_SIDEBAR_CLASSES,
          TYPE_ITEM_SIDEBAR[variant],
          className,
        )}
      >
        <div className={ITEM_WRAPPER_CLASSES}>
          {Icon && <Icon className={twMerge(ITEM_SIDEBAR_ICON_CLASSES)} />}
        </div>
        <span className={ITEM_TITLE_CLASSES}>{title}</span>
        <ArrowDownIcon className={twMerge(ITEM_SIDEBAR_ICON_CLASSES)} />
      </div>
      <div
        className={twMerge(ITEM_COLLAPSE_MENU_CLASSES, isCollapse && 'hidden')}
      >
        {children}
      </div>
    </li>
  );
};

export default CollapseSidebar;
