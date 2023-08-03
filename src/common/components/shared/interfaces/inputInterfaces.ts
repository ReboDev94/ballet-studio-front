import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

export type Variant = 'primary' | 'error' | 'base';
export type VariantTag = 'primary' | 'base';

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
