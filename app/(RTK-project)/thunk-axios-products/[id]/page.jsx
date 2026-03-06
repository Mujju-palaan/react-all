"use client";
import { useRouter } from "next/navigation";
import ClientPage from "./ClientPage";
import { IoArrowBack } from "react-icons/io5";

const Page = () => {
  const router = useRouter()
  return (
    <div className="p-4">
      <button 
      onClick={() => router.push('/thunk-axios-products')}
      className="bg-blue-300 rounded py-1 px-2 cursor-pointer">
        <div className="flex gap-2">
          <IoArrowBack className="m-1" /> 
          <p>Back</p>
        </div>
      </button>

      <ClientPage />
    </div>
  );
};

export default Page;
