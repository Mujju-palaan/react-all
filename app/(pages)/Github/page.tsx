"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type User = {
  id: number;
  login?: string;
  name?: string | null;
  followers: number;
  avatar_url?: string;
  url:string
};

function Github() {
  const [data, setData] = useState<User | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Mujju-palaan")
      .then((response) => response.json())
      .then((data: User) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      {/* <h1>{data ? data.followers : "Loading..."}</h1> */}

      {data?.avatar_url && (
        <div className=" m-4 bg-gray-600 text-white p-4 text-3xl flex gap-14">
          <div>
            <Image
              src={data.avatar_url}
              alt="Git picture"
              width={300}
              height={300}
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1>Name : {data.name}</h1>
            <h1>Github followers: {data.followers}</h1>
            <h1>Github Link: <Link href={`https://github.com/Mujju-palaan`}>{`https://github.com/Mujju-palaan`}</Link></h1>

          </div>
        </div>
      )}
    </>
  );
}

export default Github;
