import { typeEnumDays } from '../constants';

export enum Schedules {
  '7-8' = '07:00 - 08:00',
  '8-9' = '08:00 - 09:00',
  '9-10' = '09:00 - 10:00',
  '10-11' = '10:00 - 11:00',
  '11-12' = '11:00 - 12:00',
  '12-13' = '12:00 - 13:00',
  '13-14' = '13:00 - 14:00',
  '14-15' = '14:00 - 15:00',
  '15-16' = '15:00 - 16:00',
  '16-17' = '16:00 - 17:00',
  '17-18' = '17:00 - 18:00',
  '18-19' = '18:00 - 19:00',
  '19-20' = '19:00 - 20:00',
  '20-21' = '20:00 - 21:00',
  '21-22' = '21:00 - 22:00',
}

export type SchedulesValuesType = `${Schedules}`;
export const valuesScheduleEnum = Object.values(Schedules);

export interface ScheduleResponse {
  day: typeEnumDays;
  hour: SchedulesValuesType[];
}
