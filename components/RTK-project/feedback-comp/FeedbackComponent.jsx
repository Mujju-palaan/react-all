"use client";
import { TiMessages } from "react-icons/ti";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFeedback,
  feedback_like_count,
} from "../../../app/slice/feedback/feedbackSlice";
import Link from "next/link";

const FeedbackComponent = () => {
  const feedbacks = useSelector((state) => state.feedbacks.feedbacks);
  const selectedCategory = useSelector(
    (state) => state.feedbacks.selectedCategory
  );
  const sortBy = useSelector((state) => state.feedbacks.sortBy);

  // console.log("Redux feedbacks:", feedbacks);
  const dispatch = useDispatch();

  const filteredFeedbacks =
    selectedCategory === "All"
      ? feedbacks
      : feedbacks.filter((feedback) => feedback.category === selectedCategory);

  const sortedFeedbacks = [...filteredFeedbacks].sort((a, b) => {
    switch (sortBy) {
      case "MOST_UPVOTED":
        return b.likes - a.likes;

      case "LEAST_UPVOTED":
        return a.likes - b.likes;

      case "MOST_COMMENTS":
        return b.comments - a.comments;

      case "LEAST_COMMENTS":
        return a.comments - b.comments;

      default:
        return 0;
    }
  });

  if (!feedbacks.length) {
    return <p className="text-center text-gray-500">No feedback yet</p>;
  }

  return (
    <>
      {sortedFeedbacks.map((feedback) => (
        
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

          {/* ----------------- */}
          <Link key={feedback.id} href={`/`}>
          <div className="flex flex-col text-left w-full">
            <div className="flex justify-between">
              <span className="font-semibold text-sm">{feedback.title}</span>
              
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
          </Link>
          {/* ------------------ */}
        </div>
      ))}
    </>
  );
};

export default FeedbackComponent;
