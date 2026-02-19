"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchUsers } from "../../slice/Async-thunk/FetchUsersDataSlice";

const Page = () => {
  const { isLoading, data, isError } = useSelector((state) => state.FetchUser);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen justify-center items-center flex flex-col gap-8">
      <h1 className="text-6xl">React Async Thunk</h1>

      <button onClick={() => dispatch(FetchUsers())} className="btn">
        Click me to fetch data
      </button>
      {console.log("State :", { isLoading, data, isError })}
      {isLoading && <h1>{"...Loading"}</h1>}
      {isError && <p className="text-red-500">Something went wrong</p>}
      
      <ul>{data && data.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  );
};

export default Page;
