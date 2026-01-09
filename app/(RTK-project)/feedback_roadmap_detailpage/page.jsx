"use client";
import { IoMdArrowRoundBack } from "react-icons/io";
import { NewFeedBackModal } from "../../../components/RTK-project/feedback-comp/NewFeedback-modal";
import StatusCard from "../../../components/RTK-project/feedback-comp/StatusCard";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { feedback_like_count } from "../../slice/feedback/feedbackSlice";

const DetailedRoadmap = () => {
  const feedbacks = useSelector((state) => state.feedbacks.feedbacks);
  const dispatch = useDispatch();
  return (
    <div>
      {/* ------- tab bar ------------- */}
      <nav className="bg-gray-900 py-2 px-4 flex text-white justify-between m-4 rounded-sm mb-4">
        <div className="flex p-2 gap-8 text-[14px]">
          <div className="flex gap-1 cursor-pointer">
            <Link href={`feedback-project`} className="flex gap-1">
              <IoMdArrowRoundBack className="mt-1.5" />
              <button className="cursor-pointer">Go Back</button>
            </Link>
          </div>
          <div className="text-[18px]">Road map</div>
        </div>
        <div>
          <NewFeedBackModal className="btn bg-purple-700 hover:bg-purple-800  text-[14px]" />
        </div>
      </nav>
      {/* ------- tab bar ------------- */}

      {/* -----------status Details --------------- */}
      <section className="grid grid-cols-3 gap-2 m-4 justify-between px-4 ">
        <div className="">
          <h2>
            Planned ({feedbacks.filter((feedback) => feedback.status === "Planned").length})
          </h2>

          <p className="text-[10px] text-stone-500">
            Ideas peritorized for research
          </p>
          {feedbacks
            .filter((feedback) => feedback.status === "Planned")
            .map((feedback) => (
              <StatusCard
                key={feedback.id}
                color={`bg-orange-400`}
                status={feedback.status}
                title={feedback.title}
                desc={feedback.description}
                category={feedback.category}
                likes={feedback.likes}
                comments={feedback.comments}
                onClickLike={() => dispatch(feedback_like_count(feedback.id))}
              />
            ))}
        </div>
        <div className="">
          <h2>In-Progress ({feedbacks.filter((feedback) => feedback.status === "In-Progress").length})
          </h2>
          <p className="text-[10px] text-stone-500">
            Ideas peritorized for research
          </p>
          {feedbacks
            .filter((feedback) => feedback.status === "In-Progress")
            .map((feedback) => (
              <StatusCard
                key={feedback.id}
                color={`bg-purple-400`}
                status={feedback.status}
                title={feedback.title}
                desc={feedback.description}
                category={feedback.category}
                likes={feedback.likes}
                comments={feedback.comments}
                onClickLike={() => dispatch(feedback_like_count(feedback.id))}
              />
            ))}
        </div>
        <div className="">
          <h2>Live ({feedbacks.filter((feedback) => feedback.status === "Live").length})</h2>
          <p className="text-[10px] text-stone-500">
            Ideas peritorized for research
          </p>
          {feedbacks
            .filter((feedback) => feedback.status === "Live")
            .map((feedback) => (
              <StatusCard
                key={feedback.id}
                color={`bg-cyan-400`}
                status={feedback.status}
                title={feedback.title}
                desc={feedback.description}
                category={feedback.category}
                likes={feedback.likes}
                comments={feedback.comments}
                onClickLike={() => dispatch(feedback_like_count(feedback.id))}
              />
            ))}
        </div>
      </section>
    </div>
  );
};

export default DetailedRoadmap;
