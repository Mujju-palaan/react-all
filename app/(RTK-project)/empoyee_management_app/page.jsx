"use client";
import { Search } from "lucide-react";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeEmployee, updateEmployee } from "../../../app/slice/employee/employeeSlice";
import NewEmployeeModal from "../../../components/RTK-project/employee_management_comp/NewEmployeeModal";
import UpdateEmployeeModal from "../../../components/RTK-project/employee_management_comp/UpdateEmployeModal";

const Employee_Management_App = () => {
  const [search, setSearch] = useState("");
  const [id, setId] = useState('')
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.employees);
  // console.log(employees);

  return (
    <div className="min-h-screen justify-self-center ">
      <section className="rounded shadow-md w-150 m-4 p-4 bg-stone-100">
        <h2>Employee Management</h2>
        <p className="text-[12px] text-stone-500">
          Manage Employee records with Redux tool kit
        </p>
      </section>

      {/* -----------search bar--------- */}
      <section className="flex gap-4 justify-between rounded shadow-md w-150 m-4 p-4 bg-stone-100 ">
        <div className="flex">
          <Search className="mt-1.5" />
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            name="Search by name, email or position"
            id=""
            defaultValue={`sdsada`}
            className="w-full bg-transparent py-2 sm:pr-10 pl-10 text-base text-gray-500 
            placeholder-light-200  text-[14px] p-1 border rounded focus-ring-2"
          />
        </div>
        <div>
          <NewEmployeeModal />
        </div>
      </section>

      {/* -----------employee details--------- */}
      <div className="rounded shadow-md w-150 m-4">
        <ol
          className="flex justify-between  px-2 py-4  bg-stone-100
        text-[12px] border-b border-gray-300"
        >
          <li>ID</li>
          <li>NAME</li>
          <li>EMAIL</li>
          <li>PHONE</li>
          <li>POSITION</li>
          <li>ACTIONS</li>
        </ol>

        {employees.map((e) => (
          <ol
            key={e.id}
            className="flex justify-between  p-2  bg-stone-100 text-stone-500
                text-[12px] border-b border-gray-300"
          >
            <li>{e.id}</li>
            <li>{e.name}</li>
            <li>{e.email}</li>
            <li>{e.phone}</li>
            <li>{e.position}</li>
            <li className="flex gap-2">
              <button
                onClick={() => {
                  setId(e.id)
                  console.log('empId:', id);
                  
                  setOpen(true);
                }}
                className="rounded px-2 py-1 bg-blue-600 text-white cursor-pointer"
              >
                Edit 
              </button>
              <UpdateEmployeeModal open={open} setOpen={setOpen} id={id}/>
              <button
                onClick={() => {
                  dispatch(removeEmployee(e.id));
                }}
                className="rounded px-2 py-1 bg-red-600 text-white cursor-pointer"
              >
                Delete
              </button>
            </li>
          </ol>
        ))}
      </div>
    </div>
  );
};

export default Employee_Management_App;
