type SizeAvatar = 'xs' | 'sm' | 'md' | 'lg';
type ShapeAvatar = 'circle' | 'squared';
type VariantBorder = 'primary' | 'base';
type VariantBackGround = 'primary' | 'base';

export interface IAvatar {
  size?: SizeAvatar;
  shape?: ShapeAvatar;
  border?: boolean;
  borderVariant?: VariantBorder;
  bgVariant?: VariantBackGround;
  className?: string;
  title?: string;
  src?: string;
}
