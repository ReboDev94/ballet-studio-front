import { useMemo } from 'react';
import { useAppSelector } from '@/store/hooks';
import { ROLES_LABEL, TypeRoles } from '@/auth/constants';

const MAIN_ROLE = TypeRoles.admin;

export const useRoles = () => {
  const {
    user: { roles },
  } = useAppSelector(state => state.auth);

  const allRoles = useMemo(
    () => roles.map(rol => ROLES_LABEL[rol.slug as TypeRoles]).join(', '),
    [roles],
  );

  const mainRole = useMemo(() => {
    if (roles.some(rol => rol.slug === MAIN_ROLE))
      return ROLES_LABEL[MAIN_ROLE];
    return roles[0].slug;
  }, [roles]);

  const isAdmin = useMemo(
    () => roles.some(rol => rol.slug === MAIN_ROLE),
    [roles],
  );

  return { allRoles, mainRole, isAdmin };
};
