import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  feedbacks: [
    {
      id: 1,
      likes: 1,
      title: "Title",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      commemnts: 0,
      category: 'UI'
    },
  ],
};

export const feedbackSlice = createSlice({
    name:'Feedback',
    initialState,
    reducers:{
        addFeedback: (state, action) => {
            const feedback = {
                id: nanoid(),
                likes: 1,
                title: action.payload.title,
                text: action.payload.text,
                commemnts: action.payload.commemnts,
                category: action.payload.category
            }
            state.feedbacks.push(feedback)
        },
        removeFeesback: (state, action) => {
            state.feedbacks = state.feedbacks.filter((feedback) => feedback.id != action.payload)
        }
    }
  })


export const {addFeedback} = feedbackSlice.actions

export default feedbackSlice.reducer