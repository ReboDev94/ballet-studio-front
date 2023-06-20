export type Variant = 'primary';

export interface IButtonAd
  extends Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'className'
  > {
  variant?: Variant;
  block?: boolean;
}
