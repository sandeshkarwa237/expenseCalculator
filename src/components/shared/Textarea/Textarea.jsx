import React from "react";

const Textarea = (props) => {
  const { selectedValue, onChange, id, title } = props;

  return (
    <>
      <p className="mb-2 font-semibold text-gray-700">{title}</p>
      <textarea
        type="text"
        className="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36"
        id={id}
        onChange={(event) => onChange(event.target)}
        value={selectedValue}
      />
    </>
  );
};

export default Textarea;
