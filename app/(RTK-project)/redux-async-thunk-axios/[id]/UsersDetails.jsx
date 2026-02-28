import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import { DeleteUser } from "../../../slice/Async-thunk-all-methods/UsersAxiosSlice";

const UsersDetails = ({ user }) => {
  const route = useRouter();
  const dispatch = useDispatch();
  const [edit, setedit] = React.useState(false);
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="w-1/3 rounded-xl border p-8 shadow-sm space-y-3">
          <h2 className="text-2xl font-semibold">{user.name}</h2>

          <div className="text-sm text-gray-700 space-y-1">
            <p>
              <strong>Id:</strong> {user.id}
            </p>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Website:</strong> {user.website}
            </p>
          </div>

          <div className="pt-3 border-t">
            <h3 className="font-medium">Address</h3>
            <p className="text-sm">
              {user.address.street}, {user.address.suite}
              <br />
              {user.address.city} - {user.address.zipcode}
            </p>
            <p className="text-sm text-gray-500">
              Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
            </p>
          </div>

          <div className="pt-3 border-t">
            <h3 className="font-medium">Company</h3>
            <p className="text-sm">
              <strong>Name:</strong> {user.company.name}
            </p>
            <p className="text-sm italic">{user.company.catchPhrase}</p>
            <p className="text-sm text-gray-600">{user.company.bs}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 justify-center items-center m-2">
        <button
          onClick={() => setedit((prev) => !prev)}
          className="bg-yellow-300 rounded py-1 px-2 cursor-pointer"
        >
          Cancel
        </button>

        <button
          onClick={() => setedit(true)}
          className="bg-blue-300 rounded py-1 px-2 cursor-pointer"
        >
          Edit
        </button>
        <button
          onClick={() => {
            dispatch(DeleteUser(user.id));
            route.push("/redux-async-thunk-axios");
          }}
          className="bg-red-300 rounded py-1 px-2 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default UsersDetails;
