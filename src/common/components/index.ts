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
import { DividerProps as TDividerProps } from './Divider';
import { ErrorInputProps as TErrorInputProps } from './ErrorInput/index';
import { SidebarBackDrop as TSidebarBackDrop } from './Sidebar';
import { PaginationProps as TPaginationProps } from './Pagination/index';
import {
  ListGroupProps as TListGroupProps,
  ItemListGroupProps as TItemListGroupProps,
} from './ListGroup';
import { CheckboxProps as TCheckboxProps } from './Checkbox';
import { RadioProps as TRadioProps } from './Radio';
import { ModalProps as TModalProps } from './Modal/index';

import { LoadingProps as TLoadingProps } from './Loading';
import {
  SelectOptionProps as TSelectOptionProps,
  SelectProps as TSelectProps,
} from './Select';

/* Select */
export type SelectOptionProps = TSelectOptionProps;
export type SelectProps = TSelectProps;
export { default as Select } from './Select';

/* Loading */
export type LoadingProps = TLoadingProps;
export { default as Loading } from './Loading';

/* Modal */
export type ModalProps = TModalProps;
export { default as Modal } from './Modal';
/* Radio */
export type RadioProps = TRadioProps;
export { default as Radio } from './Radio';

/* Checkbox */
export type CheckboxProps = TCheckboxProps;
export { default as Checkbox } from './Checkbox';

/* Pagination */
export type PaginationProps = TPaginationProps;
export { default as Pagination } from './Pagination';

/* Error input */
export type ErrorInputProps = TErrorInputProps;
export { default as ErrorInput } from './ErrorInput';

/* Divider */

export type DividerProps = TDividerProps;
export { default as Divider } from './Divider';

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
export type SidebarBackDrop = TSidebarBackDrop;
export { default as Sidebar } from './Sidebar';

/* Button */
export type ButtonProps = TButtonProps;
export { default as Button } from './Button';

/* Card */
export type CardProps = TCardProps;
export type CardBodyProps = TCardBodyProps;
export { default as Card } from './Card';
