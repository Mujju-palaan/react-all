"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateUser } from "../../../app/slice/Async-thunk-all-methods/UsersSlice";
import { useRouter } from "next/navigation";

const UpdateUser = () => {
  const router = useRouter();
  const dispatch = useDispatch();



  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-md shadow-2xl">
      <h1 className="text-center text-4xl font-bold pb-6">Create User</h1>
      <form onSubmit={handelSubmit}>
        <label htmlFor="name" className="block mb-2 font-bold">
          Name
        </label>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={data}
          className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full"
          onChange={getUserData}
          required
        />
        {/* //Date */}
        <label htmlFor="dob" className="block mb-2 font-bold">
          DOB
        </label>
        <input
          type="date"
          name="dob"
          className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full"
          onChange={getUserData}
          required
        />
        <label htmlFor="email" className="block mb-2 font-bold">
          Email
        </label>
        <input
          type="text"
          placeholder="email"
          name="email"
          className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full"
          onChange={getUserData}
          required
        />
        <label htmlFor="job" className="block mb-2 font-bold">
          Job
        </label>
        <input
          type="text"
          placeholder="job"
          name="job"
          className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full"
          onChange={getUserData}
          required
        />
        <label htmlFor="phone" className="block mb-2 font-bold">
          Phone no.
        </label>
        <input
          type="text"
          placeholder="phone"
          name="phone"
          className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full"
          onChange={getUserData}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
