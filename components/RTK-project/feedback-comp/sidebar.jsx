"use client";
import { useSelector, useDispatch } from "react-redux";
import { NewFeedBackModal } from "./NewFeedback-modal";
import Link from "next/link";
import { setCategorFilter } from "../../../app/slice/feedback/feedbackSlice";

const Sidebar = () => {
  const dispatch = useDispatch()
  const feedbacks = useSelector((state) => state.feedbacks.feedbacks);
  const statusCounts = feedbacks.reduce((acc, feedback) => {
    acc[feedback.status] = (acc[feedback.status] || 0) + 1;
    return acc;
  }, {});
  const selectedCategory = useSelector(
    (state) => state.feedbacks.selectedCategory
  );
  

  const Categorys = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  const Roadmap = [
    { color: "bg-orange-500", status: "Planned", step: 1 },
    { color: "bg-purple-500", status: "In-Progress", step: 2 },
    { color: "bg-blue-500", status: "Live", step: 3 },
  ];
  return (
    <div className="flex flex-col gap-4 ">
      <section className="bg-stone-800 rounded text-amber-50 p-4 m-4">
        <h2>Frontend Mentor</h2>
        <p className="text-[12px]">Feedback Board</p>
      </section>

      {/* ------------ BUTTONS ---------------- */}
      <section className="flex flex-wrap gap-2 rounded shadow-2xl bg-gray-50 p-4 mx-4">
        {Categorys.map((category, idx) => (
          <button
            key={idx}
            onClick={()=>(dispatch(setCategorFilter(category)))}
            className={`rounded px-2 text-[12px] cursor-pointer ${
            selectedCategory === category
              ? "bg-blue-500 text-white"
              : "bg-blue-100 hover:bg-blue-500"
          }`}
          >
            {category}
          </button>
        ))}
      </section>

      {/* ------------ROAD MAP --------------- */}
      <section className="flex flex-col bg-white shadow-2xl rounded mx-4">
        <div className="flex justify-between m-4">
          <h3 className="font-semibold text-[14px]">Roadmap</h3>
          <Link href={`/feedback_roadmap_detailpage`}>
            <p className="text-[12px] text-blue-500 cursor-pointer">View</p>
          </Link>
        </div>

        <ul>
          {Roadmap.map((e, idx) => (
            <li key={idx} className="flex justify-between m-3">
              <div className="flex gap-2">
                <span
                  className={`rounded-full ${e.color} p-[3px] m-[6px] `}
                ></span>
                <span className="text-[12px]">{e.status}</span>
              </div>
              <p className="text-[12px] text-stone-500">
                {statusCounts[e.status] || 0}
              </p>
            </li>
          ))}
        </ul>
        <div className="mb-4">
          <NewFeedBackModal />
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
