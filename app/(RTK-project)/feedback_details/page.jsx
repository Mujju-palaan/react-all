import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

const page = () => {
  return (
    <div className="mx-30 m-8">
    {/* -------------- top bar --------- */}
      <div className="flex justify-between">
        <Link href={`/feedback-project`}>
        <span className="flex gap-1 m-2">
          <span className="mt-1">
            <IoMdArrowRoundBack />
          </span>
          <span>Go Back</span>
        </span>
        </Link>
        <span>
          <button className="btn">Edit Feedback</button>
        </span>
      </div>
        {/* -------------- top bar --------- */}

      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default page;
