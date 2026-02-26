"use client";

import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import UsersDetails from "./UsersDetails";
import { selectUserById } from "../../../slice/Async-thunk-all-methods/UsersAxiosSlice";

const Page = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { isLoading, data, userById, isError } = useSelector(
    (state) => state.users
  );

  const userId = Number(id);

  useEffect(() => {
    if (data.length > 0 && userId) {
      dispatch(selectUserById(userId));
    }
  }, [dispatch, data, userId]);
  console.log('userById:',userById);
  

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error occurred</div>;

  if (!userById) return <div>User not found</div>;

  return <UsersDetails user={userById} />;
};

export default Page;