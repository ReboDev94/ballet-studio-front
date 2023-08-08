import {
  SidebarProps as TSidebarProps,
  SidebarContentProps as TSidebarContentProps,
  SidebarCategoryProps as TSidebarCategoryProps,
  SidebarHeaderProps as TSidebarHeaderProps,
} from './Sidebar';
import { ButtonProps as TButtonProps } from './Button';
import {
  CardProps as TCardProps,
  CardBodyProps as TCardBodyProps,
} from './Card';
import { InputProps as TInputProps } from './Input';
import { TextAreaProps as TTextAreaProps } from './Textarea';
import {
  FormProps as TFormProps,
  FormLabelProps as TFormLabelProps,
} from './Form';
import {
  MenuProps as TMenuProps,
  ItemProps as TItemProps,
  CollapseProps as TCollapseProps,
} from './Menu';
import { AvatarProps as TAvataProps } from './Avatar';
import {
  DropdownProps as TDropdownProps,
  DropdownToogleProps as TDropdownToogleProps,
  DropdownMenuProps as TDropdownMenuProps,
  DropdownItemProps as TDropdownItemProps,
  DropdownDividerProps as TDropdownDividerProps,
} from './Dropdown';
import {
  TableProps as TTableProps,
  TableHeadProps as TTableHeadProps,
  TableBodyProps as TTableBody,
  TableRowProps as TTableRowProps,
} from './Table';
import { TagProps as TTagProps } from './Tag';
import {
  ListGroupProps as TListGroupProps,
  ItemListGroupProps as TItemListGroupProps,
} from './ListGroup';

/* ListGroup */
export type ListGroupProps = TListGroupProps;
export type ItemListGroupProps = TItemListGroupProps;
export { default as ListGroup } from './ListGroup';

/* Tag */
export type TagProps = TTagProps;
export { default as Tag } from './Tag';

/* Table */
export type TableRowProps = TTableRowProps;
export type TableBodyProps = TTableBody;
export type TableProps = TTableProps;
export type TableHeadProps = TTableHeadProps;
export { default as Table } from './Table';

/* DropDown */
export type DropdownProps = TDropdownProps;
export type DropdownToogleProps = TDropdownToogleProps;
export type DropdownMenuProps = TDropdownMenuProps;
export type DropdownItemProps = TDropdownItemProps;
export type DropdownDividerProps = TDropdownDividerProps;
export { default as Dropdown } from './Dropdown';

/* Avatar */
export type AvatarProps = TAvataProps;
export { default as Avatar } from './Avatar';

/* Menu */
export type MenuSidebarProps = TMenuProps;
export type ItemSidebarProps = TItemProps;
export type CollapseProps = TCollapseProps;
export { default as Menu } from './Menu';

/* Form */
export type FormProps = TFormProps;
export type FormLabelProps = TFormLabelProps;
export { default as Form } from './Form';

/* TextArea */
export type TextAreaProps = TTextAreaProps;
export { default as Textarea } from './Textarea';

/* Input */
export type InputProps = TInputProps;
export { default as Input } from './Input';

/* Sidebar */
export type SidebarProps = TSidebarProps;
export type SidebarContentProps = TSidebarContentProps;
export type SidebarCategoryProps = TSidebarCategoryProps;
export type SidebarHeaderProps = TSidebarHeaderProps;
export { default as Sidebar } from './Sidebar';

/* Button */
export type ButtonProps = TButtonProps;
export { default as Button } from './Button';

/* Card */
export type CardProps = TCardProps;
export type CardBodyProps = TCardBodyProps;
export { default as Card } from './Card';
