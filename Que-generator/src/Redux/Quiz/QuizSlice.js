import { createSlice } from '@reduxjs/toolkit';
import { javascriptQues } from '../../Data/Questions';

const initialState = {
  questions: javascriptQues,
  currentQuesIndex: 0,
  answers: [],
  isCorrect: null,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    nextQues: (state) => {
      if (state.currentQuesIndex < state.questions.length - 1) {
        state.currentQuesIndex += 1;
        state.isCorrect = null;
      }
    },
    selectAns: (state, action) => {
      const { quesIndex, ansIndex } = action.payload;
      state.answers[quesIndex] = ansIndex;
      const correct = state.questions[quesIndex].answer.includes(ansIndex);
      state.isCorrect = correct;
    },
    resetQuiz: (state) => {
      return initialState;
    },
  },
});

export const { nextQues, selectAns, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
