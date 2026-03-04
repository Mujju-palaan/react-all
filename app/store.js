import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../app/slice/todo/todoSlice";
import feedbackReducer from "./slice/feedback/feedbackSlice";
import employeeReducer from './slice/employee/employeeSlice'
import todoFlowReducer from './slice/todoFlow/todoFlowSlice'
import EcommCartReducer from './slice/Ecomm_cart/EcartSlice'
import FetchUsersDataSlice from './slice/Async-thunk/FetchUsersDataSlice'
import userSlice from './slice/Async-thunk-all-methods/UsersSlice'
import usernameSlice from './slice/Async-thunk-all-methods/UsernameSlice'
import UsersAxiosSlice from './slice/Async-thunk-all-methods/UsersAxiosSlice'
import productSlice from './slice/product-thunk/productSlice'
import ProductsSlice from './slice/product-thunk/productsSlice'

const store = configureStore({
  reducer: {
    todos: todoReducer,
    feedbacks: feedbackReducer,
    employees: employeeReducer,
    todoFlows : todoFlowReducer,
    EcommCarts : EcommCartReducer,
    FetchUser: FetchUsersDataSlice,
    Users: userSlice,
    username: usernameSlice,
    users: UsersAxiosSlice,
    product: productSlice,
    products: ProductsSlice,
  },
});

export default store;
