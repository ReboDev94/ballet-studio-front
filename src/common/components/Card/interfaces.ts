import { ReactNode } from "react";

export type BgColor = 'white';

export interface ICardAd
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  BgColor?: BgColor;
  cardHeader?: ReactNode;
  cardBody?: ReactNode;
}
