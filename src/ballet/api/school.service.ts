import { axiosInstance } from '@/common/http';
import {
  IGetSchoolResponse,
  IResponseSaveSchool,
  FormSchool,
} from '@/ballet/interfaces';

const GET_SCHOOL_URL = 'school';
const SAVE_SCHOOL_URL = 'school';
const UPDATE_SCHOOL_URL = 'school';

export const getSchoolService = async () => {
  const response = await axiosInstance.get<IGetSchoolResponse>(GET_SCHOOL_URL);
  return response;
};

export const saveSchoolService = async (dataSchool: FormSchool) => {
  const response = await axiosInstance<IResponseSaveSchool>({
    method: 'POST',
    url: SAVE_SCHOOL_URL,
    data: generateFormDataSchool(dataSchool),
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
};

export const updateSchoolService = async (dataSchool: FormSchool) => {
  const response = await axiosInstance<IResponseSaveSchool>({
    method: 'PATCH',
    url: UPDATE_SCHOOL_URL,
    data: generateFormDataSchool(dataSchool),
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
};

const generateFormDataSchool = (dataSchool: FormSchool) => {
  const formData = new FormData();
  formData.append('name', dataSchool['name']);
  formData.append('description', dataSchool['description']);
  formData.append('phone', dataSchool['phone']);
  formData.append('address', dataSchool['address']);
  formData.append('directorName', dataSchool['directorName']);
  dataSchool.certifications.forEach(cer =>
    formData.append('certifications[]', cer),
  );
  if (dataSchool['file']) formData.append('file', dataSchool['file']);
  return formData;
};
