import React from "react";

const InputField = (props) => {
  const { selectedValue, onChange, type, id, title } = props;

  return (
    <>
      <p className="mb-2 font-semibold text-gray-700">{title}</p>
      <input
        type={type}
        id={id}
        onChange={(event) => onChange(event.target)}
        value={selectedValue}
        className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
      />
    </>
  );
};

export default InputField;
