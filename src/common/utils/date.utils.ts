import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/es-mx';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(localizedFormat);
dayjs.extend(customParseFormat);
dayjs.locale('es-mx');

export const formatDate = (date: string | Date, format: string): string => {
  return dayjs(date).format(format);
};

export const isOlder = (dateOfBirth: Date) => {
  return dayjs(new Date()).diff(dateOfBirth, 'years', false) >= 18;
};
