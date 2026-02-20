"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchUsers,
  DeleteUser,
} from "../../../slice/Async-thunk-all-methods/UsersSlice";

const Page = () => {
  const dispatch = useDispatch();

  const { loading, data } = useSelector((state) => state.Users);

  useEffect(() => {
    dispatch(FetchUsers());
  }, [dispatch]);

  if (loading) {
    return <h1 className="text-4xl font-bold text-center">Loading...</h1>;
  }
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Fetching User ({data?.length || 0})</h1>

      <div className="grid grid-cols-6 gap-4 m-12">
        <h1 className="text-2xl font-bold text-center">User Name</h1>
        <h1 className="text-2xl font-bold text-center">Dob</h1>
        <h1 className="text-2xl font-bold text-center">User Email</h1>
        <h1 className="text-2xl font-bold text-center">User Job</h1>
        <h1 className="text-2xl font-bold text-center">User Phone no.</h1>
      </div>
      {data &&
        data.map((user) => (
          <div
            key={user.id}
            className="grid grid-cols-6 gap-4 m-12 text-center"
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.dob}</p>
            <p>{user.phone}</p>
            <p>{user.job}</p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => dispatch(DeleteUser(user.id))}
                className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
              >
                Delete
              </button>
              <button
                onClick={() => dispatch(EditUser(user.id))}
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Page;
