import { object, string } from 'yup';
import { VALIDATION_EMAIL, VALIDATION_REQUIRED } from '@/common/constants';

export const SchemaValidationSendEmail = object({
  email: string().email(VALIDATION_EMAIL).required(VALIDATION_REQUIRED),
});
