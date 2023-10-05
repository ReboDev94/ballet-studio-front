import { ROLES_LABEL, TypeRoles } from '../constants';
import { Role } from '../interfaces';

export const getRoles = (roles: Role[]) => {
  return roles.map(rol => ROLES_LABEL[rol.slug as TypeRoles]).join(', ');
};
