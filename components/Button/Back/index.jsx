import React from "react";
import Arrow from "./arrow/arrow";

const BackButton = ({ type, children, onClick }) => (
  <div className="flex py-2 mt-5">
   
    <button
      type={type}
      onClick={onClick}
      data-testid="back"
      className="flex bg-white hover:bg-white text-blue-500 text-sm font-normal leading-input rounded focus:outline-none focus:shadow-outline border-blue-500"
    >
       <Arrow />
      {children}
    </button>
  </div>
);
export default BackButton;
