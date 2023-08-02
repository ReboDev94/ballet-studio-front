import {  TextareaHTMLAttributes } from 'react';

export type Variant = 'primary' | 'error';

export interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: Variant;
  errorState?: boolean;
}
