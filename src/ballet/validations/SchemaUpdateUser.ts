import { mixed, object, string } from 'yup';
import {
  IMAGE_TYPE_SUPPORT,
  MAX_IMAGE_SIZE,
  VALIDATION_EMAIL,
  VALIDATION_IMAGE_SIZE,
  VALIDATION_IMAGE_TYPE,
  VALIDATION_REQUIRED,
} from '@/common/constants';

export const SchemaUpdateUser = object({
  name: string().required(VALIDATION_REQUIRED),
  phone: string().default('').optional(),
  email: string().email(VALIDATION_EMAIL).required(VALIDATION_REQUIRED),
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
