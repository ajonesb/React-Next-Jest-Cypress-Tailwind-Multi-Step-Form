import React from "react";

const Input = ({ label, error, ...rest }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold mb-2 mt-8 leading-input">
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
        {...rest}
      />
      {error && (
        <div>
          <span id="error-msg" className="text-red-500 text-sm italic"> {error}</span>
        </div>
      )}
    </div>
  );
};
export default Input;
