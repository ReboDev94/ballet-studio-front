import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ICard } from './interfaces';
import { BASE_CARD_CLASSES, TYPE_CARD } from './styles';

const Card: React.FC<ICard> = ({
  variant = 'default',
  className,
  children,
}) => {
  return (
    <div className={twMerge(BASE_CARD_CLASSES, TYPE_CARD[variant], className)}>
      {children}
    </div>
  );
};

export default Card;
