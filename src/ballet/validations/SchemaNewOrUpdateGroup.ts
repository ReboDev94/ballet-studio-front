import { mixed, number, object, string } from 'yup';
import {
  VALIDATION_HOUR_ACCEPT,
  VALIDATION_REQUIRED,
  VALIDATION_SCHOOL_CYCLE,
} from '@/common/constants';
import { REGEX_HOUR, TypeDegree } from '../constants';

const CURRENT_ANIO = new Date().getFullYear();

export const SchemaNewOrUpdateGroup = object({
  description: string().default('').optional(),
  scheduleL: string()
    .default('')
    .optional()
    .matches(REGEX_HOUR, VALIDATION_HOUR_ACCEPT),
  scheduleM: string()
    .default('')
    .optional()
    .matches(REGEX_HOUR, VALIDATION_HOUR_ACCEPT),
  scheduleMI: string()
    .default('')
    .optional()
    .matches(REGEX_HOUR, VALIDATION_HOUR_ACCEPT),
  scheduleJ: string()
    .default('')
    .optional()
    .matches(REGEX_HOUR, VALIDATION_HOUR_ACCEPT),
  scheduleV: string()
    .default('')
    .optional()
    .matches(REGEX_HOUR, VALIDATION_HOUR_ACCEPT),
  scheduleS: string()
    .default('')
    .optional()
    .matches(REGEX_HOUR, VALIDATION_HOUR_ACCEPT),
  scheduleD: string()
    .default('')
    .optional()
    .matches(REGEX_HOUR, VALIDATION_HOUR_ACCEPT),
  schoolCycle: number()
    .required(VALIDATION_REQUIRED)
    .test(
      'is-valid-year',
      VALIDATION_SCHOOL_CYCLE,
      value => value === CURRENT_ANIO || value === CURRENT_ANIO + 1,
    ),
  degree: mixed<TypeDegree>().required(VALIDATION_REQUIRED),
  teacherId: number().required(VALIDATION_REQUIRED),
});
