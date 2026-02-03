import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todoFlows: [
    {
      id: 1,
      title: "Mujju",
      createdat: "1-1-1111",
      updatedat: "1-11-1111",
      completed: false,
    },
  ],
};

export const todoFlowSlice = createSlice({
  name: "todoFlows",
  initialState,
  reducers: {
    addTodoFlow: (state, action) => {
      const now = new Date().toLocaleTimeString();
      const todoFlow = {
        id: nanoid(),
        title: action.payload,
        createdat: now,
        updatedat: now,
        completed: false,
      };
      state.todoFlows.push(todoFlow);

      // console.log("New Todo:", todoFlow);
      // console.log("All Todos:", state.todoFlows);
    },

    checkTodoFlow: (state, action) => {
      const todo = state.todoFlows.find((t) => t.id === action.payload);

      if (todo) {
        todo.completed = !todo.completed;
        // todo.updatedat = new Date().toLocaleTimeString();
      }
    },

    updateTodoFlow: (state, action) => {
      const { id, title } = action.payload;

      const todo = state.todoFlows.find((t) => t.id === id);

      if (todo) {
        todo.title = title;
        todo.updatedat = new Date().toLocaleTimeString();
      }
    },
  },
});

export const { addTodoFlow, checkTodoFlow, updateTodoFlow } = todoFlowSlice.actions;
export default todoFlowSlice.reducer;
