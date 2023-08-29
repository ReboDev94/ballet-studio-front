import { School, initialSchoolState } from '@/ballet/interfaces';

export const schoolInitialData: School = {
  id: -1,
  name: '',
  description: '',
  phone: '',
  address: '',
  certifications: [],
  directorName: '',
  logo: undefined,
};

const initialState: initialSchoolState = {
  school: schoolInitialData,
};

export type SchoolState = typeof initialState;
export default initialState;
