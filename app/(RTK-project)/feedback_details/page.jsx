"use client";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { TiMessages } from "react-icons/ti";


const Page = () => {
  const feedbacks = useSelector((state) => state.feedbacks.feedbacks);

  return (
    <div className="mx-80 m-8">
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

      <div>
        {feedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className="shadow-2xl rounded m-4 p-4 bg-white flex gap-4"
          >
            <div>
              <button
                className="btn text-[14px]"
                onClick={() => dispatch(feedback_like_count(feedback.id))}
              >
                ♡{feedback.likes}
              </button>
            </div>

            <div className="flex flex-col text-left w-full">
              <div className="flex justify-between">
                <span className="font-semibold text-sm">{feedback.title}</span>
                <span className="flex gap-1 text-sm cursor-pointer">
                  <TiMessages /> 0
                </span>
              </div>

              <p className="text-stone-500 text-xs">{feedback.description}</p>

              <div className="flex gap-2">
                <div>
                  <button className="bg-blue-100 rounded px-2 text-xs cursor-pointer">
                    {feedback.category}
                  </button>
                </div>
                <div>
                  <button className="bg-blue-100 rounded px-2 text-xs cursor-pointer">
                    {feedback.status}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Page;
