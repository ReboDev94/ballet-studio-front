import React, { ReactNode } from 'react';
import classNames from 'classnames';

export interface IFormInputAd {
  children: ReactNode;
  textRT?: string;
  textLT?: string;
}

export const FormInputAd: React.FC<IFormInputAd> = ({ children, textLT, textRT }) => {
  return (
    <div className="flex flex-col">
      {(textRT || textLT) && (
        <label
          className={classNames('py-2 px-1 flex items-center', {
            'justify-end': !textLT && textRT,
            'justify-between': textLT && textRT,
          })}
        >
          {textLT && <span className="text-sm">{textLT}</span>}
          {textRT && <span className="text-sm">{textRT}</span>}
        </label>
      )}

      {children}
    </div>
  );
};
