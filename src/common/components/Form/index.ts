import FormComponent from './Form';
import FormLabel from './FormLabel';
import { IForm, ILabel } from './interfaces';

const Form = Object.assign(FormComponent, {
  Label: FormLabel,
});

export type FormProps = IForm;
export type FormLabelProps = ILabel;
export default Form;
