/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { IOptionInputSearch, TypeObjectoOrString } from '../components';
import { useAppDispatch } from '@/store/hooks';
import { fetchSearchResultThunk } from '@/store/modules/common/thunks';

export const useSearch = <T2 extends TypeObjectoOrString, T3 = object>(
  query: string,
  searchKey: string,
  paramsP: T3,
  dataKeys: string[] = ['data'],
) => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);

  const [selected, setSelected] = useState<IOptionInputSearch<T2> | null>(null);
  const [options, setOptions] = useState<IOptionInputSearch<T2>[]>([]);

  const onGetData = async () => {
    setLoading(true);
    const params = { [searchKey]: searchValue, ...paramsP };
    const response = await dispatch(
      fetchSearchResultThunk({ query, params }),
    ).unwrap();

    let data: T2[] = [];
    let dataAux = response;
    dataKeys.forEach(key => {
      if (dataAux[key]) {
        dataAux = dataAux[key];
      }
    });
    data = dataAux as T2[];

    const opts: IOptionInputSearch<T2>[] = data.map((opt: any) => {
      const label =
        typeof opt === 'string'
          ? opt
          : opt[searchKey] || 'Etiqueta no encontrada';
      return { value: opt, label };
    });
    setOptions(opts);
    setLoading(false);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (searchValue) onGetData();
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [searchValue]);

  return {
    searchValue,
    setSearchValue,
    selected,
    setSelected,
    options,
    loading,
  };
};
