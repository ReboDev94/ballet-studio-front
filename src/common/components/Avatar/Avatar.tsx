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

const Avatar: React.FC<IAvatar> = ({
  shape = 'circle',
  size = 'xs',
  border = false,
  borderVariant = 'base',
  bgVariant = 'base',
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
        BACKGROUND_VARIANT_AVATAR[bgVariant],
        border && BORDER_AVATAR_CLASSES,
        className,
      )}
    >
      {children && !loadImg && children}
      {!children && !loadImg && <span>{title}</span>}
      <img
        src={src}
        className={twMerge('rounded-[inherit]', !loadImg && 'hidden')}
        onLoad={onLoadImg}
      />
    </div>
  );
};

export default Avatar;
