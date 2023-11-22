import { array, mixed, number, object, string } from 'yup';
import {
  VALIDATION_NUMBER_POSITIVE,
  VALIDATION_REQUIRED,
  VALIDATION_SCHOOL_CYCLE,
} from '@/common/constants';
import { TypeDegree } from '../constants';
import { SchedulesValuesType, valuesScheduleEnum } from '../interfaces';

const CURRENT_ANIO = new Date().getFullYear();

export const SchemaNewOrUpdateGroup = object({
  id: number().default(undefined).optional(),
  name: string().required(VALIDATION_REQUIRED),
  scheduleL: array(
    mixed<SchedulesValuesType>()
      .oneOf(valuesScheduleEnum)
      .required(VALIDATION_REQUIRED),
  )
    .optional()
    .defined(),
  scheduleM: array(
    mixed<SchedulesValuesType>()
      .oneOf(valuesScheduleEnum)
      .required(VALIDATION_REQUIRED),
  )
    .optional()
    .defined(),
  scheduleMI: array(
    mixed<SchedulesValuesType>()
      .oneOf(valuesScheduleEnum)
      .required(VALIDATION_REQUIRED),
  )
    .optional()
    .defined(),
  scheduleJ: array(
    mixed<SchedulesValuesType>()
      .oneOf(valuesScheduleEnum)
      .required(VALIDATION_REQUIRED),
  )
    .optional()
    .defined(),
  scheduleV: array(
    mixed<SchedulesValuesType>()
      .oneOf(valuesScheduleEnum)
      .required(VALIDATION_REQUIRED),
  )
    .optional()
    .defined(),
  scheduleS: array(
    mixed<SchedulesValuesType>()
      .oneOf(valuesScheduleEnum)
      .required(VALIDATION_REQUIRED),
  )
    .optional()
    .defined(),
  scheduleD: array(
    mixed<SchedulesValuesType>()
      .oneOf(valuesScheduleEnum)
      .required(VALIDATION_REQUIRED),
  )
    .optional()
    .defined(),
  schoolCycle: number()
    .required(VALIDATION_REQUIRED)
    .test(
      'is-valid-year',
      VALIDATION_SCHOOL_CYCLE,
      value => value === CURRENT_ANIO || value === CURRENT_ANIO + 1,
    ),
  degree: mixed<TypeDegree>().required(VALIDATION_REQUIRED),
  teacherId: number()
    .positive(VALIDATION_NUMBER_POSITIVE)
    .required(VALIDATION_REQUIRED),
});
