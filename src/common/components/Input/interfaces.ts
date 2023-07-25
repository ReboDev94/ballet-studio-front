export type Variant = 'primary' | 'error';

export interface IInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  variant?: Variant;
  errorState?: boolean;
}
