import React from 'react';
export interface IInputAd {

}
export const InputAd = () => {
  return (
    <input
      type="text"
      className={`
              block
              w-full
              rounded-sm
              shadow-sm
              border
              border-solid
              border-gray-600
              focus:border-sky-800
              focus:ring-offset-0
              focus:ring-sky-800
              disabled:cursor-not-allowed
              disabled:bg-gray-100
              `}
    />
  );
};
