import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topics: {},
};

const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id,
        name,
        icon,
        quizIds: [],
      };
    },
    addQuizToTopic: (state, action) => {
      const { quizId, topicId } = action.payload;
      if (state.topics[topicId]) {
        state.topics[topicId].quizIds.push(quizId);
      }
    },
  },
});

export const selectTopics = (state) => state.topics.topics;

export const { addTopic, addQuizToTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
