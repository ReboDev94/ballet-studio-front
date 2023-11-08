import {
  Card,
  Checkbox,
  Divider,
  Form,
  Input,
  Select,
} from '@/common/components';
import { TypeDegree } from '@/ballet/constants';
const NewUpdateGroup = () => {
  return (
    <Card>
      <Card.Body className="px-2 py-0">
        <Form /* onSubmit={handleSubmit(onSubmit)} */>
          <h3 className="text-lg text-primary-800 font-semibold">
            Datos del grupo
          </h3>
          <Divider />
          <div className="grid grid-cols-12">
            <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
              <h5 className="font-semibold">Descripción (opcional):</h5>
              <span className="text-xs text-base-500">
                Escribe una descripción para el grupo
              </span>
            </div>
            <div className="col-span-12 md:col-start-5 md:col-end-10 my-auto">
              <Input
                /*  {...register('name')} */
                type="text"
                placeholder="Grupo baby ballet 1A"
                /* errorState={!!errors.name} */
              />
              {/*  <ErrorInput message={errors.name?.message} /> */}
            </div>
          </div>
          <Divider />
          <div className="grid grid-cols-12">
            <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
              <h5 className="font-semibold">Grado:</h5>
              <span className="text-xs text-base-500">
                Seleccione el grado del grupo
              </span>
            </div>
            <div className="col-span-12 md:col-start-5 md:col-end-10 my-auto">
              <Select>
                {Object.keys(TypeDegree).map(k => (
                  <Select.Option key={k} value={k}>
                    {k}
                  </Select.Option>
                ))}
              </Select>
              {/*  <ErrorInput message={errors.name?.message} /> */}
            </div>
          </div>
          <Divider />
          <div className="grid grid-cols-12">
            <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
              <h5 className="font-semibold">Ciclo escolar:</h5>
              <span className="text-xs text-base-500">
                Seleccione el año del ciclo escolar
              </span>
            </div>
            <div className="col-span-12 md:col-start-5 md:col-end-10 my-auto">
              <Select>
                <Select.Option value="2024">2024</Select.Option>
                <Select.Option value="2023">2023</Select.Option>
              </Select>
              {/*  <ErrorInput message={errors.name?.message} /> */}
            </div>
          </div>

          <Divider />
          <div className="grid grid-cols-12">
            <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
              <h5 className="font-semibold">Horario:</h5>
              <span className="text-xs text-base-500">
                Establezca los horarios de clases durante la semana
              </span>
            </div>
            <div className="col-span-12 md:col-start-5 md:col-end-10 my-auto flex flex-col gap-3">
              <Input type="time" />
              <label
                htmlFor="allDays"
                className="flex gap-2 items-center justify-between select-none cursor-pointer text-xs"
              >
                Seleccionar horario por cada dia
                <Checkbox id="allDays" />
              </label>

              {/*    <div className="grid grid-cols-12 gap-2">
                <div className="col-span-6">
                  <Form.Label title="Lunes:">
                    <Input type="time" />
                  </Form.Label>
                </div>
                <div className="col-span-6">
                  <Form.Label title="Martes:">
                    <Input type="time" />
                  </Form.Label>
                </div>
                <div className="col-span-6">
                  <Form.Label title="Martes:">
                    <Input type="time" />
                  </Form.Label>
                </div>
                <div className="col-span-6">
                  <Form.Label title="Miercoles:">
                    <Input type="time" />
                  </Form.Label>
                </div>
                <div className="col-span-6">
                  <Form.Label title="Jueves:">
                    <Input type="time" />
                  </Form.Label>
                </div>
                <div className="col-span-6">
                  <Form.Label title="Viernes:">
                    <Input type="time" />
                  </Form.Label>
                </div>
                <div className="col-span-6">
                  <Form.Label title="Sabado:">
                    <Input type="time" />
                  </Form.Label>
                </div>
                <div className="col-span-6">
                  <Form.Label title="Domingo:">
                    <Input type="time" />
                  </Form.Label>
                </div>
              </div> */}

              {/*  <ErrorInput message={errors.name?.message} /> */}
            </div>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default NewUpdateGroup;
