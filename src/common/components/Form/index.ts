import FormComponent from './Form';
import { IForm } from './interfaces';
import Label from './Label';

const Form = Object.assign(FormComponent, {
  Label,
});

export type FormProps = IForm;
export default Form;
