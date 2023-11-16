import SelectComponente from './Select';
import Option from './Option';
import { ISelect, ISelectOption } from '../shared/interfaces/inputInterfaces';

const Select = Object.assign(SelectComponente, {
  Option,
});

export default Select;
export type { ISelect, ISelectOption };
