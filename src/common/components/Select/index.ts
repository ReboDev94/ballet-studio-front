import SelectComponente from './Select';
import Option from './Option';
import { ISelect, ISelectOption } from '../shared/interfaces/inputInterfaces';

const Select = Object.assign(SelectComponente, {
  Option,
});

export type SelectProps = ISelect;
export type SelectOptionProps = ISelectOption;
export default Select;
