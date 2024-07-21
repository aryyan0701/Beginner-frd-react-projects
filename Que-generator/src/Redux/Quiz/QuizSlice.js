import { createSlice } from '@reduxjs/toolkit';
import { javascriptQues } from '../../Data/Questions';

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    questions: javascriptQues,
    currentQuesIndex: 0,
    answers: [],
    isCorrect: null,
  },
  reducers: {
    nextQues: (state) => {
      if (state.currentQuesIndex < state.questions.length - 1) {
        state.currentQuesIndex += 1;
        state.isCorrect = null; // Reset the correctness state for the new question
      }
    },
    selectAns: (state, action) => {
      const { quesIndex, ansIndex } = action.payload;
      state.answers[quesIndex] = ansIndex;
      state.isCorrect = state.questions[quesIndex].answer.includes(ansIndex); // Check if the selected answer is correct
    },
  },
});

export const { nextQues, selectAns } = quizSlice.actions;
export default quizSlice.reducer;
