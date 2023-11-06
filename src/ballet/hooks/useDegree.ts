import { v4 as uuidv4 } from 'uuid';
import { useMemo, useState } from 'react';
import { TypeAttDegree, TypeDegree } from '../constants';

export const useDegree = () => {
  const [degreeFilter, setDegreeFilter] = useState(
    Object.keys(TypeDegree).map(value => ({
      type: TypeDegree[value as TypeAttDegree],
      id: `${uuidv4()}-${value}`,
      value: false,
    })),
  );

  const checkedDegreeFilter = ({
    target: { checked, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const newDegree = degreeFilter.map(dg => {
      if (name === dg.id) dg.value = checked;
      return dg;
    });
    setDegreeFilter(newDegree);
  };

  const selectedDegrees = useMemo(() => {
    return degreeFilter
      .filter(({ value }) => value)
      .map(({ type }) => type)
      .join(',');
  }, [degreeFilter]);

  return { degreeFilter, checkedDegreeFilter, selectedDegrees };
};
