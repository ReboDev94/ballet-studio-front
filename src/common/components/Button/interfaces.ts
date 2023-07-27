export type VariantBtn = 'primary';

export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: VariantBtn;
  block?: boolean;
}
