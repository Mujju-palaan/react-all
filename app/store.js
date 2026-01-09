import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../app/slice/todo/todoSlice";
import feedbackReducer from "./slice/feedback/feedbackSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    feedbacks: feedbackReducer,
  },
});

export default store;
