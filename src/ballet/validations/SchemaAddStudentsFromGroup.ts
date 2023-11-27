import { array, number, object } from 'yup';
import {
  VALIDATION_ADD_STUDENTS,
  VALIDATION_REQUIRED,
} from '@/common/constants';

export const SchemaAddStudentsFromGroup = object({
  groupId: number().default(undefined).optional(),
  students: array(number().required(VALIDATION_REQUIRED))
    .min(1, VALIDATION_ADD_STUDENTS)
    .defined(),
});
