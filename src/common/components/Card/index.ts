import CardComponent from './Card';
import CardBody from './CardBody';
import { ICard, ICardBody } from './interfaces';

const Card = Object.assign(CardComponent, {
  Body: CardBody,
});

export default Card;
export type { ICard, ICardBody };
