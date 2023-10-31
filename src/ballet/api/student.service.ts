import { axiosInstance } from '@/common/http';
import {
  IFormNewUpdateStudent,
  IGetStudentsRequest,
  IGetStudentsResponse,
} from '../interfaces';
import { formatDate } from '@/common/utils';

const GET_ALL_STUDENTS = 'student';
const DELETE_STUDENT = 'student/:studentId';
const CREATE_STUDENT = 'student';

export const getStudentService = async (data: IGetStudentsRequest) => {
  const response = await axiosInstance.get<IGetStudentsResponse>(
    GET_ALL_STUDENTS,
    { params: data },
  );
  return response;
};

export const deleteStudentService = async (studentId: number) => {
  const response = await axiosInstance.delete(
    DELETE_STUDENT.replace(':studentId', `${studentId}`),
  );
  return response;
};

export const createStudentService = async (dataP: IFormNewUpdateStudent) => {
  const response = await axiosInstance({
    method: 'POST',
    url: CREATE_STUDENT,
    data: generateFormDataStudent(dataP),
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
};

const generateFormDataStudent = (dataStudent: IFormNewUpdateStudent) => {
  const { dieseses: diesesesP, dateOfBirth: dateOfBirthP } = dataStudent;
  const dateOfBirth = formatDate(dateOfBirthP, 'YYYY-MM-DD');
  const dieseses = diesesesP.map(({ title }) => title);

  const formData = new FormData();
  formData.append('name', dataStudent['name']);
  formData.append('dateOfBirth', dateOfBirth);
  formData.append('address', dataStudent['address']);
  formData.append('tutorCelPhone', dataStudent['tutorCelPhone']);

  if (dataStudent['tutorName'])
    formData.append('tutorName', dataStudent['tutorName']);
  if (dataStudent['tutorEmail'])
    formData.append('tutorEmail', dataStudent['tutorEmail']);
  if (dataStudent['tutorPhone'])
    formData.append('tutorPhone', dataStudent['tutorPhone']);
  if (dataStudent['file']) formData.append('file', dataStudent['file']);

  dieseses.forEach(diesese => formData.append('dieseses[]', diesese));
  return formData;
};
