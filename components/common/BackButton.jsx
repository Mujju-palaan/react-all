"use client";

import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

const BackButton = ({ url }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(url)}
      className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-100 transition"
    >
      <IoArrowBack size={18} />
      Back
    </button>
  );
};

export default BackButton;
