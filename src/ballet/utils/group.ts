import { typeEnumDays } from '../constants';
import { ScheduleResponse, Schedules } from '../interfaces';

export const getSchedulesByDay = (
  schedules: ScheduleResponse[],
  dayP: typeEnumDays,
) => {
  const hours = schedules.find(({ day }) => day === dayP)?.hour || [];
  const indexMap: Record<string, number> = {};
  Object.values(Schedules)
    .filter(v => isNaN(Number(v)))
    .forEach((v, i) => {
      indexMap[v] = i;
    });

  hours.sort((a, b) => {
    const indexA = indexMap[a];
    const indexB = indexMap[b];
    return indexA - indexB;
  });

  return hours;
};
