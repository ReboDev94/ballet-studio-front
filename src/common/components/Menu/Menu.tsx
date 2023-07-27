import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IMenu } from './interfaces';
import { MENU_CLASSES } from './styles';

const Menu: React.FC<IMenu> = ({ className, ...props }) => {
  return <ul className={twMerge(MENU_CLASSES, className)} {...props} />;
};

export default Menu;
