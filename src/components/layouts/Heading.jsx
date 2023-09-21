import React from "react";

const Heading = ({ title }) => {
  return (
    <h1 className="py-4 text-4xl font-bold text-center capitalize rounded-md  bg-slate-900 text-yellow-50">
      {title}
    </h1>
  );
};

export default Heading;
