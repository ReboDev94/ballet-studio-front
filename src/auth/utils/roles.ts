import { ROLES_LABEL, TypeRoles } from '../constants';
import { Role } from '../interfaces';

const PRINCIPAL_ROLE = TypeRoles.admin;
export const getRoles = (roles: Role[], principalRole = false) => {
  if (roles.some(rol => rol.slug === PRINCIPAL_ROLE) && principalRole)
    return ROLES_LABEL[PRINCIPAL_ROLE];

  return roles.map(rol => ROLES_LABEL[rol.slug as TypeRoles]).join(', ');
};
