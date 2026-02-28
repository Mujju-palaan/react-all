import React from "react";

const Error = ({error}) => {
  return (
    <div className="min-h-screen flex justify-center items-center text-4xl text-red-600">
      {error.message || error}
    </div>
  );
};

export default Error;
