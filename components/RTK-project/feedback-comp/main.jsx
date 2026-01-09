"use client";
import React from "react";
import FeedbackComponent from "./FeedbackComponent";
import { NewFeedBackModal } from "./NewFeedback-modal";
import { useSelector, useDispatch } from "react-redux";
import { setSortBy } from "../../../app/slice/feedback/feedbackSlice";

const Main = () => {
  const dispatch = useDispatch();
  const feedbacks = useSelector((state) => state.feedbacks.feedbacks);
  return (
    <div>
      <section className="bg-stone-800 text-amber-50 rounded p-4 flex justify-between m-4">
        <div className="flex flex-row sm:gap-4">
          <span>{feedbacks.length} Suggestions</span>
          <span>Sort by:</span>
          <select
            className="border-none bg-stone-800"
            onChange={(e) => dispatch(setSortBy(e.target.value))}
          >
            <option value="MOST_UPVOTED">Most Upvoted</option>
            <option value="LEAST_UPVOTED">Least Upvoted</option>
            <option value="MOST_COMMENTS">Most Comments</option>
            <option value="LEAST_COMMENTS">Least Comments</option>
          </select>
        </div>
        <div>
          <NewFeedBackModal />
        </div>
      </section>

      <section>
        <FeedbackComponent />
      </section>
    </div>
  );
};

export default Main;
