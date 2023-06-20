import React from 'react';
import classNames from 'classnames';
import { ICardAd } from './interfaces';
import { BASE_CARD_CLASSES } from './constants';

export const CardAd: React.FC<ICardAd> = ({
  cardBody,
  cardHeader,
  className = '',
}) => {
  return (
    <div className={classNames(`${BASE_CARD_CLASSES} ${className}`)}>
      {cardHeader}
      <div className="px-6 py-6">{cardBody}</div>
    </div>
  );
};
