import React from "react";
import Sidebar from "../../../components/RTK-project/feedback-comp/sidebar";
import Main from "../../../components/RTK-project/feedback-comp/main";

const page = () => {
  return (
    <div className="grid gap-6 m-4 sm:grid-cols-12 text-center bg-blue-50">
      <div className="sm:col-span-3">
        <Sidebar />
      </div>
      <div className="sm:col-span-7">
        <Main />
      </div>
    </div>
  );
};

export default page;
