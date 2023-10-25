import { object, ref, string } from 'yup';
import {
  REGEX_PASSWORD,
  VALIDATION_EMAIL,
  VALIDATION_MAX_PASSWORD,
  VALIDATION_MIN_PASSWORD,
  VALIDATION_PASSWORD_ACCEPT,
  VALIDATION_PASSWORD_DO_MATCH,
  VALIDATION_REQUIRED,
} from '@/common/constants';

export const SchemaValidationResetPassword = object({
  email: string().email(VALIDATION_EMAIL).required(VALIDATION_REQUIRED),
  token: string().required(VALIDATION_REQUIRED),
  password: string()
    .required(VALIDATION_REQUIRED)
    .test('len', VALIDATION_MIN_PASSWORD, val => val.length >= 6)
    .test('len', VALIDATION_MAX_PASSWORD, val => val.length <= 30)
    .matches(REGEX_PASSWORD, VALIDATION_PASSWORD_ACCEPT),
  confirmPassword: string()
    .required(VALIDATION_REQUIRED)
    .oneOf([ref('password')], VALIDATION_PASSWORD_DO_MATCH),
});
