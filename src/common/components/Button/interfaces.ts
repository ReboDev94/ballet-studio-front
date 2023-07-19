export type VariantBtn = 'primary';

export interface IButton
  extends Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'className'
  > {
  variant?: VariantBtn;
  block?: boolean;
}
