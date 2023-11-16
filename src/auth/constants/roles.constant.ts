import { v4 as uuidv4 } from 'uuid';

export const ROLES_LABEL = {
  admin: 'Administrador(a)',
  teacher: 'Profesor(a)',
  receptionist: 'Recepcionista',
};

export enum TypeRoles {
  admin = 'admin',
  teacher = 'teacher',
  receptionist = 'receptionist',
}

export type typeEnumRoles = keyof typeof TypeRoles;

export const allRoles = Object.values(TypeRoles);

export const getAllRolesSelectable = () => {
  return allRoles.map(value => ({
    id: `${uuidv4()}-${value}`,
    type: value,
  }));
};
