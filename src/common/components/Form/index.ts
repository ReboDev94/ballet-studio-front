import FormComponent from './Form';
import { IForm } from './interfaces';
import FormLabel from './FormLabel';

const Form = Object.assign(FormComponent, {
  Label: FormLabel,
});

export type FormProps = IForm;
export default Form;
