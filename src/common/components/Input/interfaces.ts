import React from 'react';

export type Variant = 'primary' | 'error';

export interface IInput extends React.HTMLAttributes<HTMLInputElement> {
  variant?: Variant;
  errorState?: boolean;
}
