import { twMerge } from 'tailwind-merge';
import { ICardBody } from './interfaces';
import { DEFAULT_CARD_BODY_CLASSES } from './styles';

export const CardBody = ({ children, className }: ICardBody) => {
  return (
    <div className={twMerge(DEFAULT_CARD_BODY_CLASSES, className)}>
      {children}
    </div>
  );
};
