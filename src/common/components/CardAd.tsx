import React, { ReactNode } from 'react';
import classNames from 'classnames';

type BgColor = 'white';
export interface ICardAd
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  BgColor?: BgColor;
  cardHeader?: ReactNode;
  cardBody?: ReactNode;
}

export const CardAd: React.FC<ICardAd> = ({ cardBody, cardHeader, className = '', color = 'white' }) => {
  return (
    <div className={classNames(`drop-shadow-md rounded-2xl ${className}`, { 'bg-white': color === 'white' })}>
      {cardHeader}
      <div className="px-6 py-6">{cardBody}</div>
    </div>
  );
};
