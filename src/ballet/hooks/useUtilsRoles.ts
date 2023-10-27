import { allRoles } from '@/auth/constants';
import { useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useUtilsRoles = () => {
  const [rolesFilter, setRolesFilter] = useState(
    allRoles.map(value => ({
      type: value,
      id: `${uuidv4()}-${value}`,
      value: false,
    })),
  );

  const checkedRolesFilter = ({
    target: { checked, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const newRoles = [...rolesFilter].map(rol => {
      if (rol.id === name) rol.value = checked;
      return rol;
    });
    setRolesFilter(newRoles);
  };

  const rolesTypeSelected = useMemo(
    () => rolesFilter.filter(({ value }) => value).map(({ type }) => type),
    [rolesFilter],
  );

  return {
    rolesFilter,
    rolesTypeSelected,
    checkedRolesFilter,
  };
};
