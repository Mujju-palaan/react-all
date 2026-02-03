import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../app/slice/todo/todoSlice";
import feedbackReducer from "./slice/feedback/feedbackSlice";
import employeeReducer from './slice/employee/employeeSlice'
import todoFlowReducer from './slice/todoFlow/todoFlowSlice'

const store = configureStore({
  reducer: {
    todos: todoReducer,
    feedbacks: feedbackReducer,
    employees: employeeReducer,
    todoFlows : todoFlowReducer
  },
});

export default store;
