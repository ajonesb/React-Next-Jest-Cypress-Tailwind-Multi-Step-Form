import React from "react";

const NextButton = ({ type, children, onClick }) => (
  <button
    type={type}
    onClick={onClick}
    data-testid="submit"
    className="next bg-blue-500 hover:bg-blue-700 text-sm font-normal leading-input text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5"
  >
    {children}
  </button>
);
export default NextButton;
