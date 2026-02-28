"use client";

import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import UsersDetails from "./UsersDetails";
import { GetUsers } from "../../../slice/Async-thunk-all-methods/UsersAxiosSlice";
import { IoArrowBackOutline } from "react-icons/io5";
import CircularProgressWithLabel from '../../../../components/common/Spinner'


const ClientPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const route = useRouter()

  const { isLoading, data, isError } = useSelector(
    (state) => state.users
  );

  // 1️⃣ Fetch users once if missing
  useEffect(() => {
    if (data.length === 0) {
      dispatch(GetUsers());
    }
  }, [dispatch, data.length]);

  // 2️⃣ Normalize id
  const userId = Number(id);

  // 3️⃣ Recompute when id OR data changes
  const userById = useMemo(() => {
    if (!userId || data.length === 0) return null;
    return data.find((user) => user.id === userId) || null;
  }, [data, userId]);
  console.log('userById:',userById);
  

  if (isLoading) return <div><CircularProgressWithLabel /></div>;

  if (isError) return <div>Error occurred</div>;

  return (
    <div className="p-4">
        <button 
        onClick={() => route.push('/redux-async-thunk-axios')}
        className="flex items-center px-2 py-1 border rounded bg-stone-500 cursor-pointer">
          <IoArrowBackOutline />
          <p>Back</p>
        </button>
        {userById && <UsersDetails user={userById} />}
    </div>
  );
};

export default ClientPage;