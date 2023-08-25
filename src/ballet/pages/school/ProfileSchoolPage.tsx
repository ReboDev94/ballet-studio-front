import { useState, useEffect, KeyboardEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import toast, { Toaster } from 'react-hot-toast';
import {
  Avatar,
  Card,
  Input,
  Textarea,
  Button,
  ListGroup,
  Divider,
  ErrorInput,
} from '@/common/components';
import { IconCloseCircle, IconSchool } from '@/common/assets/svg';
import { useAppSelector } from '@/store/hooks';
import { FormSchool } from '@/ballet/interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaSchool } from '@/ballet/validations';
import {
  ERROR_SAVE_DATA_SCHOOL,
  IMAGE_TYPE_SUPPORT,
  LOADING_SAVE_SCHOOL,
  SAVE_DATA_SCHOOL,
} from '@/common/constants';
import { HAS_SCHOOL_LABEL, DEFAULT_TOAST_OPTIONS } from '@/common/constants';

const ProfileSchoolPage = () => {
  const navigate = useNavigate();
  const {
    user: { hasSchool },
    school: { logo, ...resSchool },
  } = useAppSelector(state => state.auth);

  const [certificationInput, setcertificationInput] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormSchool>({
    mode: 'onSubmit',
    defaultValues: {
      ...resSchool,
      file: null,
    },
    resolver: yupResolver(SchemaSchool),
  });

  const [name, directorName, address, certifications] = watch([
    'name',
    'directorName',
    'address',
    'certifications',
  ]);

  const submit: SubmitHandler<FormSchool> = () => {
    const myPromise = new Promise(resolve => {
      setTimeout(() => {
        resolve('hola');
      }, 5000);
    });
    toast.promise(
      myPromise,
      {
        loading: LOADING_SAVE_SCHOOL,
        success: SAVE_DATA_SCHOOL,
        error: ERROR_SAVE_DATA_SCHOOL,
      },
      { id: 'school' },
    );
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      if (!certifications.includes(certificationInput) && certificationInput) {
        setValue('certifications', [...certifications, certificationInput]);
        setcertificationInput('');
      }
    }
  };

  const deleteCertifications = (title: string) => {
    const newCertifications = certifications.filter(
      titleAux => titleAux !== title,
    );
    setValue('certifications', newCertifications);
  };

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setValue('file', e.target.files[0]);
    } else {
      setValue('file', null);
    }
    trigger('file');
  };

  useEffect(() => {
    if (!hasSchool)
      toast.error(HAS_SCHOOL_LABEL, {
        id: 'hasSchool',
      });
  }, []);

  return (
    <>
      <Card>
        <Card.Body>
          <h3 className="text-xl text-base-500 font-semibold">
            Perfil escuela
          </h3>
          <Divider />
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Avatar size="lg" src={logo}>
              <IconSchool className="fill-white h-14 w-14" />
            </Avatar>
            <div className="flex flex-col gap-1 w-full">
              <p className="text-3xl min-h-[2.5rem] break-words text-primary-800 font-semibold text-center md:text-start">
                {name}
              </p>
              <span className="break-words font-semibold text-lg min-h-[1.75rem] text-center md:text-start">
                {directorName}
              </span>
              <span className="break-words text-xs min-h-[1rem]">
                {address}
              </span>
            </div>
          </div>
          <Divider />
          <div className="grid grid-cols-12">
            <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
              <h5 className="font-semibold">Nombre de la institución</h5>
              <span className="text-xs text-base-500">
                Escribe el nombre de la institución
              </span>
            </div>
            <div className="col-span-12 md:col-start-5 md:col-end-10 my-auto">
              <Input
                type="text"
                placeholder="Ballet Studio"
                {...register('name')}
                errorState={!!errors.name}
              />
              <ErrorInput message={errors.name?.message} />
            </div>
          </div>
          <Divider />
          <div className="grid grid-cols-12">
            <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
              <h5 className="font-semibold">Nombre del (a) director (a)</h5>
              <span className="text-xs text-base-500">
                Escribe el nombre del (a) director (a) de la institución
              </span>
            </div>
            <div className="col-span-12 md:col-start-5 md:col-end-10 my-auto">
              <Input
                type="text"
                placeholder="Dalia Nava"
                {...register('directorName')}
              />
              <ErrorInput message={errors.directorName?.message} />
            </div>
          </div>
          <Divider />
          <div className="grid grid-cols-12">
            <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
              <h5 className="font-semibold">Logo (opcional):</h5>
              <span className="text-xs text-base-500">
                Selecciona la imagen para el logo de la institución
              </span>
            </div>
            <div className="col-span-12 md:col-start-5 md:col-end-10 my-auto">
              <Input
                type="file"
                accept={IMAGE_TYPE_SUPPORT.join(', ')}
                onChange={handleFile}
              />
              <ErrorInput message={errors.file?.message} />
            </div>
          </div>
          <Divider />
          <div className="grid grid-cols-12">
            <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
              <h5 className="font-semibold">Descripción (opcional):</h5>
              <span className="text-xs text-base-500">
                Escribe una reseña o comentario sobre la institución
              </span>
            </div>
            <div className="col-span-12 md:col-start-5 md:col-end-10 my-auto">
              <Textarea
                placeholder="Descripción"
                rows={3}
                className="resize-none"
                {...register('description')}
              />
              <ErrorInput message={errors.description?.message} />
            </div>
          </div>
          <Divider />
          <div className="grid grid-cols-12">
            <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
              <h5 className="font-semibold">Teléfono (opcional):</h5>
              <span className="text-xs text-base-500">
                Escribe el número de teléfono de la institución
              </span>
            </div>
            <div className="col-span-12 md:col-start-5 md:col-end-10 my-auto">
              <Input
                type="text"
                placeholder="000-000-00-00"
                {...register('phone')}
              />
              <ErrorInput message={errors.phone?.message} />
            </div>
          </div>
          <Divider />
          <div className="grid grid-cols-12">
            <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
              <h5 className="font-semibold">Dirección (opcional):</h5>
              <span className="text-xs text-base-500">
                Escribe la dirección la institución
              </span>
            </div>
            <div className="col-span-12 md:col-start-5 md:col-end-10 my-auto">
              <Textarea
                placeholder="Dirección"
                rows={2}
                className="resize-none"
                {...register('address')}
              />
              <ErrorInput message={errors.address?.message} />
            </div>
          </div>
          <Divider />
          <div className="grid grid-cols-12">
            <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
              <h5 className="font-semibold">Certificaciones (opcional):</h5>
              <span className="text-xs text-base-500">
                Escribe las certificaciones que tiene la institución
              </span>
            </div>
            <div className="col-span-12 md:col-start-5 md:col-end-10 my-auto">
              <Input
                type="text"
                placeholder="certificación"
                className="mb-4"
                value={certificationInput}
                onChange={({ target: { value } }) =>
                  setcertificationInput(value)
                }
                onKeyDown={handleKeyDown}
              />
              <ErrorInput message={errors.certifications?.message} />
              {certifications.length > 0 && (
                <ListGroup>
                  {certifications.map(title => (
                    <ListGroup.Item key={uuidv4()} variant="primary">
                      <div className="w-full h-full flex items-center justify-between">
                        <span className="flex-1 line-clamp-1">{title}</span>
                        <button
                          type="button"
                          onClick={() => deleteCertifications(title)}
                        >
                          <IconCloseCircle className="fill-primary-800 h-6 w-6" />
                        </button>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </div>
          </div>
          <Divider />
          <div className="flex gap-2 justify-end">
            {hasSchool && (
              <Button
                variant="outline-primary"
                onClick={() => navigate('/dashboard')}
              >
                Cancelar
              </Button>
            )}
            <Button variant="primary" onClick={handleSubmit(submit)}>
              Guardar
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Toaster {...DEFAULT_TOAST_OPTIONS} />
    </>
  );
};

export default ProfileSchoolPage;
