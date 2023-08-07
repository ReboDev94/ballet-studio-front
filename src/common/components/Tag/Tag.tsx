import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  KeyboardEvent,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { ITag } from '../shared/interfaces/inputInterfaces';
import {
  TYPE_TAG,
  TYPE_ITEM,
  ITEM_TAG_CLASSES,
  BASE_INPUT_CLASSES,
  BASE_INPUT_TAG_CLASSES,
  WRAPPER_ALL_TAGS_CLASSES,
  DEFAULT_INPUT_INTERNAL_TAG_CLASSES,
  ICON_TAG_CLASSES,
  ITEM_DISABLED_CLASSES,
  BASE_TAG_DISABLED_CLASSES,
  BASE_INPUT_TAG_DISABLED_CLASSES,
} from '../shared/styles/inputStyles';
import { IconX } from '../assets/svg';

const Tag: React.FC<ITag> = ({
  variantTag = 'primary',
  variant = 'primary',
  errorState = false,
  disabled = false,
  value,
  onChange,
  onRemoved,
  placeholder,
  className,
}) => {
  const tags = value;
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('');
  const [focusDiv, setfocusDiv] = useState(false);

  const VARIANT_CLASSES = useMemo(
    () => TYPE_TAG[errorState ? 'error' : variant],
    [errorState, variant],
  );

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      if (!value.includes(inputValue) && inputValue) {
        const newTags = [...value];
        newTags.push(inputValue);
        onChange(newTags, inputValue);
        setInputValue('');
      }
    }
  };

  useEffect(() => {
    focusDiv && inputRef.current && inputRef.current.focus();
  }, [focusDiv]);

  return (
    <div
      tabIndex={0}
      onFocus={() => setfocusDiv(true)}
      onBlur={() => setfocusDiv(false)}
      className={twMerge(
        BASE_INPUT_CLASSES,
        VARIANT_CLASSES,
        BASE_INPUT_TAG_CLASSES,
        disabled && BASE_INPUT_TAG_DISABLED_CLASSES,
        className,
      )}
    >
      {tags.length > 0 && (
        <div className={WRAPPER_ALL_TAGS_CLASSES}>
          {tags.map(tag => (
            <span
              className={twMerge(
                ITEM_TAG_CLASSES,
                TYPE_ITEM[variantTag],
                disabled && ITEM_DISABLED_CLASSES,
              )}
              key={tag}
            >
              {tag}
              {!disabled && (
                <button onClick={() => onRemoved(tag)}>
                  <IconX className={twMerge(ICON_TAG_CLASSES)} />
                </button>
              )}
            </span>
          ))}
        </div>
      )}

      <input
        ref={inputRef}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        className={twMerge(
          DEFAULT_INPUT_INTERNAL_TAG_CLASSES,
          disabled && BASE_TAG_DISABLED_CLASSES,
        )}
      />
    </div>
  );
};

export default Tag;
