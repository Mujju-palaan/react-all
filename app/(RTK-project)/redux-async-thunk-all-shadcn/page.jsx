"use client";
import React, { useEffect } from "react";
import CreateUserForm from "./CreateUserForm";
import { useDispatch, useSelector } from "react-redux";
import { DeleteUsername, FetchUsername } from "../../slice/Async-thunk-all-methods/UsernameSlice";
import { DataTable } from "./DataTable";

const Page = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.username);

  useEffect(() => {
    dispatch(FetchUsername());
  }, [dispatch]);

  if (isLoading) {
    return <h1 className="text-4xl font-bold text-center">Loading...</h1>;
  }
  return (
    <div className="flex flex-col gap-4 justify-center items-center p-4">
      <CreateUserForm />
      <div>
        <h2>Usernames ({data.length})</h2>
      </div>

      <div>
        <DataTable
          data={data}
        />
      </div>
    </div>
  );
};

export default Page;
