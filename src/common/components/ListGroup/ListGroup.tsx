import React from 'react';
import { twMerge } from 'tailwind-merge';
import { DEFAULT_LIST_GROUP_CLASSES } from './styles';
import { IListGroup } from './interfaces';

const ListGroup: React.FC<IListGroup> = ({ className, ...props }) => {
  return (
    <ul
      role="list"
      className={twMerge(DEFAULT_LIST_GROUP_CLASSES, className)}
      {...props}
    />
  );
};

export default ListGroup;
