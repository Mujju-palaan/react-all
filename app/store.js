import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../app/slice/todo/todoSlice'

const store = configureStore({
    reducer: todoReducer
})

export default store