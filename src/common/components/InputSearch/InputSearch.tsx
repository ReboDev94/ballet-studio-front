/* eslint-disable @typescript-eslint/no-empty-function */
import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { twMerge } from 'tailwind-merge';
import {
  BASE_BUTTON_CLEAR_CLASSES,
  BASE_CLEAR_ICON_CLASSES,
  BASE_SEARCH_ICON_CLASSES,
  BASE_WRAPPER_SEARCH_ICON_CLASSES,
  BASE_WRAPPER_SEARCH_ICON_DISABLED_CLASSES,
  MENU_WRAPPER_OPT_CLASSES,
  MENU_WRAPPER_VISIBLE_OPT_CLASSES,
  OPT_LIST_SEARCH_CLASSES,
  TEXT_NO_OPTION_CLASSES,
  WRAPPER_LOADING_CLASSES,
} from './styles';
import { Input, Button, Loading } from '../';
import { IconSearch, IconX } from '../assets/svg';
import { SIZE_MD, VARIANT_PRIMARY } from '../constants';
import {
  IInputSearch,
  ObjetoOString,
  OptionInputSearch,
} from '../shared/interfaces/inputInterfaces';

const InputSearch = <T extends ObjetoOString>({
  buttonClearProps,
  searchValue,
  onSearchValue,
  value,
  renderItem,
  onChange = () => {},
  options = [],
  variant = VARIANT_PRIMARY,
  errorState = false,
  sizeType = SIZE_MD,
  labelNoOption = 'Sin opciones',
  loading = false,
  clearable = true,
  disabled = false,
}: IInputSearch<T>) => {
  const refDiv = useRef<HTMLDivElement | null>(null);
  const [showList, setShowList] = useState(false);

  const clearData = () => {
    onSearchValue('');
    setShowList(false);
  };

  const changeData = (e: OptionInputSearch<T> | null) => {
    onChange(e);
    clearData();
  };

  const handleClick = (event: MouseEvent) => {
    if (refDiv.current && !refDiv.current.contains(event.target as Node)) {
      clearData();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div ref={refDiv} className="relative">
      <div className="relative w-full">
        <div>
          <Input
            value={searchValue}
            onChange={e => onSearchValue(e.target.value)}
            variant={variant}
            errorState={errorState}
            sizeType={sizeType}
            placeholder={value ? value.label : 'Selecciona una opción'}
            className={twMerge(value && 'placeholder:font-medium')}
            onFocus={() => setShowList(true)}
            disabled={disabled}
          />
        </div>
        {value && clearable && (
          <Button
            {...buttonClearProps}
            size="xs"
            className={twMerge(BASE_BUTTON_CLEAR_CLASSES)}
            type="button"
            onClick={() => changeData(null)}
            disabled={disabled}
          >
            <IconX className={BASE_CLEAR_ICON_CLASSES} />
          </Button>
        )}
        {!value && (
          <div
            className={twMerge(
              BASE_BUTTON_CLEAR_CLASSES,
              BASE_WRAPPER_SEARCH_ICON_CLASSES,
              disabled && BASE_WRAPPER_SEARCH_ICON_DISABLED_CLASSES,
            )}
          >
            <IconSearch className={BASE_SEARCH_ICON_CLASSES} />
          </div>
        )}
      </div>
      {!disabled && (
        <div
          tabIndex={0}
          className={twMerge(
            MENU_WRAPPER_OPT_CLASSES,
            showList && MENU_WRAPPER_VISIBLE_OPT_CLASSES,
          )}
        >
          {loading && (
            <div className={WRAPPER_LOADING_CLASSES}>
              <Loading size="md" />
            </div>
          )}

          {options.length === 0 && !loading && (
            <p className={TEXT_NO_OPTION_CLASSES}>{labelNoOption}</p>
          )}

          {!loading && options.length > 0 && (
            <ul className="space-y-2">
              {options.map(opt => (
                <li
                  className={OPT_LIST_SEARCH_CLASSES}
                  onClick={() =>
                    changeData({ value: opt.value, label: opt.label })
                  }
                  key={uuidv4()}
                >
                  {renderItem ? renderItem(opt) : opt.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default InputSearch;
