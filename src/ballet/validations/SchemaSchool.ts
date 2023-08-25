import { array, mixed, object, string } from 'yup';
import {
  IMAGE_TYPE_SUPPORT,
  MAX_IMAGE_SIZE,
  VALIDATION_IMAGE_SIZE,
  VALIDATION_IMAGE_TYPE,
  VALIDATION_REQUIRED,
} from '@/common/constants';

export const SchemaSchool = object({
  name: string().required(VALIDATION_REQUIRED),
  description: string().default('').optional(),
  phone: string().default('').optional(),
  address: string().default('').optional(),
  directorName: string().required(VALIDATION_REQUIRED),
  certifications: array(string().required(VALIDATION_REQUIRED)).defined(),
  file: mixed<File>()
    .nullable()
    .test('file-size', VALIDATION_IMAGE_SIZE, val => {
      return !val || (val && val.size / 1024 <= MAX_IMAGE_SIZE);
    })
    .test('file-type', VALIDATION_IMAGE_TYPE, val => {
      return !val || (val && IMAGE_TYPE_SUPPORT.includes(val.type));
    })
    .defined(),
});
