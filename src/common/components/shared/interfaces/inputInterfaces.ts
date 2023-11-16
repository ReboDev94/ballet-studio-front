import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';
import { IButton } from '../..';
import {
  SIZE_LG,
  SIZE_MD,
  SIZE_SM,
  SIZE_XS,
  VARIANT_BASE,
  VARIANT_ERROR,
  VARIANT_PRIMARY,
} from '../../constants';
export type Variant =
  | typeof VARIANT_PRIMARY
  | typeof VARIANT_ERROR
  | typeof VARIANT_BASE;

export type Size =
  | typeof SIZE_XS
  | typeof SIZE_SM
  | typeof SIZE_MD
  | typeof SIZE_LG;

export type VariantTag = typeof VARIANT_PRIMARY | typeof VARIANT_BASE;

interface defaultInput {
  variant?: Variant;
  errorState?: boolean;
  sizeType?: Size;
}

export interface IInput
  extends InputHTMLAttributes<HTMLInputElement>,
    defaultInput {}

export interface ITextArea
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    Omit<defaultInput, 'sizeType'> {}

export interface ITag extends defaultInput {
  value: string[];
  onChange: (tags: string[], newTag: string) => void;
  onRemoved: (tag: string) => void;
  variantTag?: VariantTag;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

export interface ISelect
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    defaultInput {}
export interface ISelectOption
  extends React.OptionHTMLAttributes<HTMLOptionElement> {}

export interface OptionInputSearch<T = string> {
  value: T;
  label: string;
}
export interface IInputSearch<T = string> extends defaultInput {
  clearable?: boolean;
  disabled?: boolean;
  loading?: boolean;
  labelNoOption?: string;
  value?: OptionInputSearch<T> | null;
  onChange?: (val: OptionInputSearch<T> | null) => void;
  options?: OptionInputSearch<T>[];
  children?: ReactNode;
  buttonClearProps?: Omit<
    IButton,
    'onClick' | 'disabled' | 'type' | 'className' | 'style' | 'children'
  >;
  renderItem?: (val: OptionInputSearch<T>) => ReactNode;
}
