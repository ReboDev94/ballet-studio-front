import React, { ReactNode } from 'react';

export interface ICardAd {
  children: ReactNode;
}

export const CardAd: React.FC<ICardAd> = ({ children }) => {
  return <div className={`bg-white shadow-md rounded-lg px-6 py-6`}>{children}</div>;
};
