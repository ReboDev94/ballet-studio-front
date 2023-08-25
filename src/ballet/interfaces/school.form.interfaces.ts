import { School } from '@/auth/interfaces';

//
export interface FormSchool extends Omit<School, 'logo' | 'id'> {
  file: File | null;
}
