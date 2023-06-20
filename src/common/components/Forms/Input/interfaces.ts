export type Variant = 'primary' | 'error';

export interface IInputAd
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'className'
  > {
  variant?: Variant;
  errorState?: boolean;
  errorMessage?: string;
}
