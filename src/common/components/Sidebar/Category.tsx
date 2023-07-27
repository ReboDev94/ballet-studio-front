import React from 'react';
import { twMerge } from 'tailwind-merge';
import { CATEGORY_CLASSES } from './styles';
import { ICategory } from './interfaces';

const Category: React.FC<ICategory> = ({ title, tag = 'h1', className }) => {
  const Tag = tag;
  return <Tag className={twMerge(CATEGORY_CLASSES, className)}>{title}</Tag>;
};

export default Category;
