import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { VARIANT_BASE, VARIANT_ERROR, VARIANT_PRIMARY } from '../../constants';

export type Variant =
  | typeof VARIANT_PRIMARY
  | typeof VARIANT_ERROR
  | typeof VARIANT_BASE;

export type VariantTag = typeof VARIANT_PRIMARY | typeof VARIANT_BASE;

interface defaultInput {
  variant?: Variant;
  errorState?: boolean;
}

export interface IInput
  extends InputHTMLAttributes<HTMLInputElement>,
    defaultInput {}

export interface ITextArea
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    defaultInput {}

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
