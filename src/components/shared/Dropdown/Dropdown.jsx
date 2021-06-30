import React, { useCallback } from "react";

const Dropdown = (props) => {
  const { selectedValue, onChange, id, title, options } = props;

  // Dynamic rendering for people's name
  const getOptionData = useCallback(() => {
    return options.map((optionText) => {
      return <option value={optionText}>{optionText}</option>;
    });
  }, [options]);

  return (
    <>
      <p className="mb-2 font-semibold text-gray-700">{title}</p>
      <select
        className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
        id={id}
        value={selectedValue}
        onChange={(event) => onChange(event.target)}
      >
        <option value="">Select</option>
        {getOptionData()}
      </select>
    </>
  );
};

export default Dropdown;
