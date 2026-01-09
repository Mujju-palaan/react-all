import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../app/slice/todo/todoSlice";
import feedbackReducer from "./slice/feedback/feedbackSlice";
import employeeReducer from './slice/employee/employeeSlice'

const store = configureStore({
  reducer: {
    todos: todoReducer,
    feedbacks: feedbackReducer,
    employees: employeeReducer
  },
});

export default store;
