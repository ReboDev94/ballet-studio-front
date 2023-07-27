import { twMerge } from 'tailwind-merge';
import { CONTENT_CLASSES } from './styles';
import React from 'react';
import { IContent } from './interfaces';

const Content: React.FC<IContent> = ({ children, className }) => {
  return <div className={twMerge(CONTENT_CLASSES, className)}>{children}</div>;
};

export default Content;
