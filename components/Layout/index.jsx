import React from "react";

const Layout = ({ children }) => (
  <div className="rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 px-3 py-[200px] flex justify-center">
    <div className="w-full max-w-[360px]">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {" "}
        {children}
      </div>
    </div>
  </div>
);
export default Layout;
