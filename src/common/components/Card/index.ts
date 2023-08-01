import CardComponent from './Card';
import CardBody from './CardBody';
import { ICard, ICardBody } from './interfaces';

const Card = Object.assign(CardComponent, {
  Body: CardBody,
});

export type CardProps = ICard;
export type CardBodyProps = ICardBody;
export default Card;
