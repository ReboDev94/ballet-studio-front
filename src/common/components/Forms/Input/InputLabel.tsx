import React from 'react';
import { twJoin } from 'tailwind-merge';
import { IFormInputAd } from './interfaces';
import { DEFAULT_INPUT_LABEL_CLASSES } from './styles';

export const InputLabel: React.FC<IFormInputAd> = ({
  children,
  textLT,
  textRT,
}) => {
  return (
    <div className="flex flex-col">
      {(textRT || textLT) && (
        <label
          className={twJoin(
            DEFAULT_INPUT_LABEL_CLASSES,
            !textLT && textRT && 'justify-end',
            textLT && textRT && 'justify-between',
          )}
        >
          {textLT && <span>{textLT}</span>}
          {textRT && <span >{textRT}</span>}
        </label>
      )}

      {children}
    </div>
  );
};
