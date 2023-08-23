import { array, mixed, object, string } from 'yup';
import { VALIDATION_REQUIRED } from '@/common/constants/validations';

export const SchemaSchool = object({
  name: string().required(VALIDATION_REQUIRED),
  description: string().default('').optional(),
  phone: string().default('').optional(),
  address: string().default('').optional(),
  directorName: string().required(VALIDATION_REQUIRED),
  certifications: array(string().required(VALIDATION_REQUIRED)).defined(),
  file: mixed<File>().nullable().defined(),
});
