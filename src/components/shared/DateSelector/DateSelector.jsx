import React, { useCallback } from "react";
import DatePicker from "react-date-picker";

const DateSelector = (props) => {
  const { selectedValue, onDateChange, title, id } = props;

  const onChange = useCallback(
    (value) => {
      onDateChange({ id, value });
    },
    [id, onDateChange]
  );

  return (
    <>
      <p className="mb-2 font-semibold text-gray-700">{title}</p>
      <DatePicker
        id={id}
        className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
        onChange={(value) => onChange(value)}
        value={selectedValue}
        clearIcon={null}
      />
    </>
  );
};

export default DateSelector;
