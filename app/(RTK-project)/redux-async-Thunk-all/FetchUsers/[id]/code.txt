"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchUsers,
  UpdateUser,
} from "../../../../slice/Async-thunk-all-methods/UsersSlice";
import Link from "next/link";

const Page = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);

  const { data } = useSelector((state) => state.Users);
  useEffect(() => {
    dispatch(FetchUsers());
  }, [dispatch]);

  const user = data.find((u) => u.id === id);

  const [formData, setFormData] = useState(() => ({
    name: user?.name || "",
    email: user?.email || "",
    dob: user?.dob || "",
    phone: user?.phone || "",
    job: user?.job || "",
  }));

  const dummydata = [
    { title: "Name", value: "name", type: "text" },
    { title: "Email", value: "email", type: "email" },
    { title: "DOB", value: "dob", type: "date" },
    { title: "Phone", value: "phone", type: "tel" },
    { title: "Job", value: "job", type: "text" },
  ];

  const handleSave = () => {
    dispatch(UpdateUser({ id, updatedData: formData }));
    setEdit(false);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="border rounded shadow-2xl w-1/3 p-4 m-4">
        <h1 className="text-2xl font-bold text-center justify-center pb-4">
          User Details
        </h1>
        {dummydata.map((d, idx) => (
          <div key={idx} className="flex gap-4 p-2">
            <label htmlFor={d.value} className="text-xl font-bold">
              {d.title}:
            </label>

            {edit ? (
              <input
                className="border rounded text-[12px] px-2"
                type={d.type}
                id={d.value}
                name={d.value}
                value={formData[d.value] || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    [d.value]: e.target.value,
                  }))
                }
              />
            ) : (
              <span>{user?.[d.value]}</span>
            )}
          </div>
        ))}
        <div className="flex justify-center items-center">
          {edit ? (
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setEdit(!edit)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
            >
              Edit
            </button>
          )}
          {/* <button
            onClick={() => setEdit(!edit)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
          >
            {edit ? "Save" : "Edit"}
          </button> */}
          <Link
            href="/redux-async-Thunk-all/FetchUsers"
            className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer ml-4"
          >
            Close
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
