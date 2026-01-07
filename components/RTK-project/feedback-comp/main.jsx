import React from "react";
import Feedbackdata from "./feedback";
import { NewFeedBackModal } from "./NewFeedback-modal";

const Main = () => {
  
  return (
    <div>
      <section className="bg-stone-800 text-amber-50 rounded p-4 flex justify-between m-4">
        <div className="flex sm:gap-4">
          <span>7 Suggestions</span>
          <span>Sort by:</span>
          <select name="" id="" className="border-none">
            <option className="text-stone-800" value="">
              Most Upvoted
            </option>
            <option className="text-stone-800" value="">
              Least Upvoted
            </option>
            <option className="text-stone-800" value="">
              Most Comments
            </option>
            <option className="text-stone-800" value="">
              Least Comments
            </option>
          </select>
        </div>
        <div>
          <NewFeedBackModal />
        </div>
      </section>

      <section>
        <Feedbackdata />
      </section>
    </div>
  );
};

export default Main;
