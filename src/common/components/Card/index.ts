import CardComponent from './Card';
import CardBody from './CardBody';
import { ICard } from './interfaces';

const Card = Object.assign(CardComponent, {
  Body: CardBody,
});

export type CardProps = ICard;
export default Card;
