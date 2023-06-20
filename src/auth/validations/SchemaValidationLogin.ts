import { object, string } from 'yup';
import {
  VALIDATION_EMAIL,
  VALIDATION_REQUIRED,
} from '@/common/constants/validations';

export const SchemaValidationLogin = object({
  email: string().email(VALIDATION_EMAIL).required(VALIDATION_REQUIRED),
  /* TODO:VALIDAR ESTRUCTURA DEL PASSWORD */
  password: string().required(VALIDATION_REQUIRED),
});
