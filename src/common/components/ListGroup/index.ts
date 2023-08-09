import ListGroupComponent from './ListGroup';
import ListItem from './ListItem';
import { IItemListGroup, IListGroup } from './interfaces';

const ListGroup = Object.assign(ListGroupComponent, {
  Item: ListItem,
});

export type ListGroupProps = IListGroup;
export type ItemListGroupProps = IItemListGroup;
export default ListGroup;
