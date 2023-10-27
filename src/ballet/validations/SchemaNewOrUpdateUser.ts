import { array, mixed, object, string } from 'yup';
import {
  VALIDATION_ARRAY_ROLES,
  VALIDATION_EMAIL,
  VALIDATION_REQUIRED,
} from '@/common/constants';
import { TypeRoles } from '@/auth/constants';

export const SchemaNewOrUpdateUser = object({
  name: string().required(VALIDATION_REQUIRED),
  phone: string().default('').optional(),
  email: string().email(VALIDATION_EMAIL).required(VALIDATION_REQUIRED),
  roles: array(
    mixed<TypeRoles>()
      .oneOf(Object.values(TypeRoles))
      .required(VALIDATION_REQUIRED),
  )
    .required(VALIDATION_REQUIRED)
    .test('len-array-1', VALIDATION_ARRAY_ROLES, val => val.length >= 1)
    .defined(),
});
