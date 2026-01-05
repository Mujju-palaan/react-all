import React from "react";

const Sidebar = () => {
  const btn = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  const Roadmap = [
    { color: "bg-orange-500", status: "Planned", step: 1 },
    { color: "bg-purple-500", status: "In-progress", step: 2 },
    { color: "bg-blue-500", status: "Live", step: 3 },
  ];
  return (
    <div className="flex flex-col gap-4 ">
      <section className="bg-stone-800 rounded text-amber-50 p-4 mx-4">
        <h2>Frontend Mentor</h2>
        <p className="text-[12px]">Feedback Board</p>
      </section>

        {/* ------------ BUTTONS ---------------- */}
      <section className="flex flex-wrap gap-2 rounded shadow-2xl bg-gray-50 p-4 mx-4">
        {btn.map((e, idx) => (
          <button
            key={idx}
            className="bg-blue-100 rounded px-2 cursor-pointer hover:bg-blue-500 text-[12px]"
          >
            {e}
          </button>
        ))}
      </section>

        {/* ------------ROAD MAP --------------- */}
      <section className="flex flex-col bg-white shadow-2xl rounded mx-4">
        <div className="flex justify-between m-4">
          <h3 className="font-semibold text-[14px]">Roadmap</h3>
          <p className="text-[12px] text-blue-500 cursor-pointer">View</p>
        </div>

        <ul>
          {Roadmap.map((e, idx) => (
            <li key={idx} className="flex justify-between m-3">
              <div className="flex gap-2">
                <span className={`rounded-full ${e.color} p-[3px] m-[6px] `}></span>
                <span className="text-[12px]">{e.status}</span>
              </div>
              <p className="text-[12px] text-stone-500">{e.step}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
