"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUsers } from "../../slice/Async-thunk-all-methods/UsersAxiosSlice";
import FetchUserData from './FetchUserData'
import CircularProgressWithLabel from '../../../components/common/Spinner'


const Page = () => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(GetUsers());
  }, [dispatch]);

  if (isLoading) {
    return <div><CircularProgressWithLabel /></div>;
  }
  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }
  console.log(data);

  return <div className="mx-10">
    <FetchUserData data={data} />
  </div>;
};

export default Page;
