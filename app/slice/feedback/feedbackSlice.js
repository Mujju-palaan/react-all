import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  feedbacks: [
    {
      id: 1,
      title: "Title",
      category: "UI",
      status: "status",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      likes: 0,
      comments: 0,
    },
  ],
  count: 0,
  selectedCategory: "All",
  sortBy: "Most Upvoted",
};

export const feedbackSlice = createSlice({
  name: "Feedback",
  initialState,
  reducers: {
    addFeedback: (state, action) => {
      // console.log("Payload received in reducer:", action.payload);

      const feedback = {
        id: nanoid(),
        title: action.payload.title,
        category: action.payload.category,
        status: action.payload.status,
        description: action.payload.description,
        likes: 0,
        comments: 0,
      };
      state.feedbacks.unshift(feedback);
      // console.log("Updated Redux state:", state);
    },
    removeFeedback: (state, action) => {
      state.feedbacks = state.feedbacks.filter(
        (feedback) => feedback.id != action.payload
      );
    },
    feedback_like_count: (state, action) => {
      const feedback = state.feedbacks.find(
        (feedback) => feedback.id === action.payload
      );
      if (feedback) {
        feedback.likes += 1;
      }
    },
    setCategorFilter: (state, action) => {
      // console.log("Payload received in reducer:", action.payload);
      state.selectedCategory = action.payload;
      // console.log("Updated Redux state:", state);
    },
    setSortBy: (state, action) => {
      console.log("Payload received in reducer:", action.payload);
      state.sortBy = action.payload;
      console.log("Updated Redux state:", state);
    },
  },
});

export const {
  addFeedback,
  removeFeedback,
  feedback_like_count,
  setCategorFilter,
  setSortBy,
} = feedbackSlice.actions;

export default feedbackSlice.reducer;
