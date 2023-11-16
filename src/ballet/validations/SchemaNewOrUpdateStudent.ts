import { array, date, mixed, number, object, string } from 'yup';
import {
  IMAGE_TYPE_SUPPORT,
  MAX_IMAGE_SIZE,
  VALIDATION_DATE,
  VALIDATION_EMAIL,
  VALIDATION_IMAGE_SIZE,
  VALIDATION_IMAGE_TYPE,
  VALIDATION_REQUIRED,
} from '@/common/constants';
import { IDieseses } from '../interfaces';
import { isOlder } from '@/common/utils';

export const SchemaNewOrUpdateStudent = object({
  id: number().default(undefined).optional(),
  name: string().required(VALIDATION_REQUIRED),
  dateOfBirth: date().required(VALIDATION_REQUIRED).typeError(VALIDATION_DATE),
  address: string().required(VALIDATION_REQUIRED),
  dieseses: array(mixed<IDieseses>().required(VALIDATION_REQUIRED)).defined(),
  tutorCelPhone: string().required(VALIDATION_REQUIRED),
  tutorName: string()
    .when('dateOfBirth', {
      is: (value: Date) => isOlder(value),
      then: schema => schema.notRequired(),
      otherwise: schema => schema.required(VALIDATION_REQUIRED),
    })
    .defined(),
  file: mixed<File>()
    .nullable()
    .test('file-size', VALIDATION_IMAGE_SIZE, val => {
      return !val || (val && val.size / 1024 <= MAX_IMAGE_SIZE);
    })
    .test('file-type', VALIDATION_IMAGE_TYPE, val => {
      return !val || (val && IMAGE_TYPE_SUPPORT.includes(val.type));
    })
    .defined(),
  tutorEmail: string().email(VALIDATION_EMAIL).default('').optional(),
  tutorPhone: string().default('').optional(),
});
