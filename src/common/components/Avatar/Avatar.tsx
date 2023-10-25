import React, { useState } from 'react';
import { IAvatar } from './interfaces';
import { twMerge } from 'tailwind-merge';
import {
  BACKGROUND_VARIANT_AVATAR,
  BORDER_AVATAR_CLASSES,
  BORDER_VARIANT_AVATAR,
  DEFAULT_AVATAR_CLASSES,
  SHAPE_AVATAR,
  SIZE_AVATAR,
} from './styles';
import { SHAPE_CIRCLE, SIZE_XS, VARIANT_BASE } from '../constants';

const Avatar: React.FC<IAvatar> = ({
  shape = SHAPE_CIRCLE,
  size = SIZE_XS,
  border = false,
  borderVariant = VARIANT_BASE,
  bgVariant = VARIANT_BASE,
  title,
  src,
  children,
  className,
}) => {
  const [loadImg, setloadImg] = useState(false);

  const onLoadImg = () => {
    setloadImg(true);
  };

  return (
    <div
      className={twMerge(
        DEFAULT_AVATAR_CLASSES,
        SIZE_AVATAR[size],
        SHAPE_AVATAR[shape],
        BORDER_VARIANT_AVATAR[borderVariant],
        !loadImg && BACKGROUND_VARIANT_AVATAR[bgVariant],
        border && BORDER_AVATAR_CLASSES,
        className,
      )}
    >
      {children && !loadImg && children}
      {!children && !loadImg && <span>{title}</span>}
      <img
        src={src}
        className={twMerge(
          'rounded-[inherit] object-fill',
          SIZE_AVATAR[size],
          !loadImg && 'hidden',
        )}
        onLoad={onLoadImg}
      />
    </div>
  );
};

export default Avatar;
