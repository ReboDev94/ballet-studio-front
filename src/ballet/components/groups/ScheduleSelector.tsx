/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { typeEnumDays } from '@/ballet/constants';
import { SchedulesValuesType } from '@/ballet/interfaces';

interface ScheduleSelectroProps {
  value?: SchedulesValuesType[];
  onChange?: (v: SchedulesValuesType[]) => void;
  schedule: SchedulesValuesType;
  day: typeEnumDays;
}
const ScheduleSelector: React.FC<ScheduleSelectroProps> = ({
  value = [],
  onChange = () => {},
  schedule,
  day,
}) => {
  const changeValue = (checked: boolean, schedule: SchedulesValuesType) => {
    const newValues = checked
      ? [...value, schedule]
      : [...value].filter(v => v !== schedule);
    onChange(newValues);
  };

  return (
    <div className="flex">
      <input
        id={`${schedule}-${day}`}
        name={day}
        type="checkbox"
        value={schedule}
        checked={value.includes(schedule)}
        onChange={({ target: { checked } }) => {
          changeValue(checked, schedule);
        }}
        className="peer hidden"
      />
      <label
        htmlFor={`${schedule}-${day}`}
        className="select-none cursor-pointer rounded-md w-full h-6 bg-base-100 transition-colors duration-200 ease-in-out peer-checked:bg-primary-800"
      ></label>
    </div>
  );
};

export default ScheduleSelector;
